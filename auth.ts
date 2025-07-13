import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github"


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("Missing credentials");
          return null;
        }

        console.log("Attempting login with:", credentials.email);

        const response = await fetch("http://localhost:9090/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        console.log("Response status:", response.status);
        if (!response.ok) {
          console.log("Backend auth failed with status:", response.status);
          return null;
        }

        const data = await response.json();
        console.log("Auth successful, user data received: ", data);

        return {
          id: data.user.userId.toString(),
          firstName: data.user.firstName || "",
          lastName: data.user.lastName || "",
          email: data.user.email,
          role: data.user.authorities[0].authority,
          idToken: data.jwt
        };
      },
    }),
    Google, GitHub
  ],
  callbacks: {
    async jwt({ token, account, user }:any) {

      if (account) {
        token.provider = account.provider;
        if (account.provider === "google") {
          token.accessToken = account.access_token;
          token.idToken = account.id_token;
        }
        if(account.provider === "credentials"){
          token.idToken = user.idToken;
          token.name = user.firstName;
        }
        if(account.provider === "github"){
          console.log(token);
          console.log(account);
          token.idToken = account.access_token;
        }
        if (user) {
          token.id = user.email;
        }
      }
      return token;
    },
    async session({ session, token}:any) {
      session.user = {
        ...session.user,
        provider: token.provider,
        name: token.name
      };
      return session;
    },
  },
  debug: true,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/signin",
  },
});
