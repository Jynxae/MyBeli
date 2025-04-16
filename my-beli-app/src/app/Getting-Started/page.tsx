"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function Page() {
  return (
    <main className="min-h-screen bg-green-50 flex flex-col items-center justify-center text-center px-6">
      <button className="absolute top-30 left-18 z-10">
        <Link href="Landing">
          <IoIosArrowBack size={32} />
        </Link>
      </button>

      <h1 className="text-5xl font-bold text-green-700 mb-4">
        What makes this app different from Beli?
      </h1>
      <p className="text-lg text-green-600 max-w-lg">
        Discover, track, and share your favorite restaurants with friends. Find
        the best dining experiences with ease!
      </p>
    </main>
  );
}
