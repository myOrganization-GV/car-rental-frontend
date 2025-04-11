import NextAuth from "next-auth";
import { auth } from "./auth";
import { privateRoutes } from "./routes";

export default auth(async (req)=> {
    const isLoggedIn = !!req.auth;
    const {nextUrl} = req;
    const baseUrl = process.env.BASE_URL as string

    const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);
    const isAuthPage = ["/signin", "/signup"].some(el => nextUrl.pathname.includes(el))
    console.log(isAuthPage)

    if(isLoggedIn && isAuthPage){
        return Response.redirect(baseUrl)
    }
    if(!isLoggedIn && isPrivateRoute){
        return Response.redirect(`${baseUrl}/signin`)
    }
})

export const config ={
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/","/(api|trpc)(.*)"],
}