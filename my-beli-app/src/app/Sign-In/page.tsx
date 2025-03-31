"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import foodOverlay from "./food-overlay.jpeg";
import { IoIosArrowBack } from "react-icons/io";

const page = () => {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignIn = () => {
    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    router.push("/HomeFeed");
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <main className="min-h-screen bg-green-50 flex flex-col items-center justify-center text-center px-6">
      <button className="absolute top-20 left-18 z-10">
        <Link href="\">
          <IoIosArrowBack size={32} />
        </Link>
      </button>
      <div className="bg-white h-96 w-1/2 flex rounded-lg shadow-xl">
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <h1 className="text-2xl font-bold text-green-800 pt-12">
            Welcome Back!
          </h1>
          <input
            type="text"
            value={username}
            onChange={handleUserNameChange}
            placeholder="Enter your username"
            className="mt-6 rounded-md border border-gray-400 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2"
          />
          <input
            type="text"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            className="rounded-md mt-6 border border-gray-400 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2"
          />
          <button
            onClick={handleSignIn}
            className="mt-6 bg-green-300 text-white rounded-md px-6 py-3 rounded-full text-lg shadow-md"
          >
            Sign In
          </button>

          <button className="mt-3 text-sm text-green-800">
            Forgot Password?
          </button>
        </div>
        <div className="flex-1 bg-green-200"> cover img here laterz</div>
      </div>

      <div className="absolute top-10 left-10 w-24 h-24 bg-green-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-300 rounded-full opacity-20"></div>
    </main>
  );
};

export default page;
