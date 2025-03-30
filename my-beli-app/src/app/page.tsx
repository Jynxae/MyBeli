"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-green-700 text-center px-6">
      <h1 className="text-6xl font-bold text-green-800 mb-4">
        Welcome to Reem's Beli
      </h1>
      <p className="text-lg text-green-600 max-w-md">
        Discover, track, and share your favorite restaurants effortlessly!
      </p>

      <Link href="/Getting-Started">
        <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-green-600 transition">
          Get Started
        </button>
      </Link>

      <Link href="/Sign-In">
        <button className="pt-5">Sign-In</button>
      </Link>

      <div className="absolute top-10 left-10 w-24 h-24 bg-green-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-300 rounded-full opacity-20"></div>
    </main>
  );
}
