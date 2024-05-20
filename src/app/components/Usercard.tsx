import { User } from "next-auth";
import Image from "next/image";
import React from "react";

export default function Usercard({ user }: { user: User }) {
  return (
    <div className="bg-gray-100">
      <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src={user.image ? user.image : ""}
          alt="Profile picture"
          width={100}
          height={100}
        />
        <h2 className="text-center text-2xl font-semibold mt-3">
          {user.name && user.name}
        </h2>
        <div className="flex justify-center mt-5">
          {user?.email && <p className="text-gray-600 mt-1">{user?.email}</p>}
        </div>
      </div>
    </div>
  );
}
