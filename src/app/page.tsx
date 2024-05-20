import Image from "next/image";
import { getUserSession } from "./lib/session";
import UserCard from "./components/Usercard";
export default async function Home() {
  const user = await getUserSession();

  console.log("hello", user);

  return (
    <div className="h-screen w-screen bg-gray-100">
      {user && <UserCard user={user} />}
    </div>
  );
}
