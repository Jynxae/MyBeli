"use client";
import React from "react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const page = () => {
  // Sample feed data
  const posts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    username: `user${i}`,
    restaurant: `resaurant ${i}`,
    location: "Houston, TX",
    content: `This is a food review number ${i}`,
  }));

  return (
    <main className="min-h-screen bg-green-50 flex flex-col items-center px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">
        Let's see what your friends think...
      </h1>

      {/* Scrollable Feed Container */}
      <div className="w-full max-w-2xl flex-grow overflow-y-auto space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded-xl shadow-md border border-gray-200"
          >
            <CgProfile size={32} />
            <h2 className="font-semibold">
              @{post.username} tried {post.restaurant}
            </h2>
            <h4>{post.location}</h4>
            <p className="text-gray-700 mt-1">{post.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;
