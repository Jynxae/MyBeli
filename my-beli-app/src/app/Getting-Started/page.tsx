import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-green-50 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold text-green-700 mb-4">
        What makes this app different from Beli?
      </h1>
      <p className="text-lg text-green-600 max-w-lg">
        Discover, track, and share your favorite restaurants with friends. Find
        the best dining experiences with ease!
      </p>

      <div className="absolute top-10 left-10 w-24 h-24 bg-green-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-300 rounded-full opacity-20"></div>
    </main>
  );
}
