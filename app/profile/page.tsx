import { auth } from "@/auth";

const MyProfile = async () => {
  const session = await auth();


  const backendResponse = await fetch("http://localhost:8080/user/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.user?.accessToken}`
    }
  });


  const responseText = await backendResponse.text();

  const user = session?.user;

  return (
    <div className="text-black">
      <h1>Welcome, {user?.firstName}</h1>
      <p>{responseText}</p>
    </div>
  );
};

export default MyProfile;
