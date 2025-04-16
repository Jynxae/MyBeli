"use client";
import React from "react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const ProfilePage = () => {
  const posts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    username: `user${i}`,
    restaurant: `restaurant${i}`,
    location: "Houston, TX",
    content: `This is a food review number ${i}`,
  }));

  return (
    <main className="min-h-screen bg-green-50 flex flex-col items-center px-4 py-10">
      <div className="mb-6">
        <CgProfile size={140} className="text-green-800" />
      </div>

      <div className="text-center text-green-900 text-2xl mb-4">
        First Name Last Name
        <div className="text-md text-gray-600">@username</div>
      </div>

      <div className="flex gap-12 text-center text-green-900 mb-8">
        <div>
          <p className="text-xl font-semibold">123</p>
          <p className="text-sm text-gray-600">Followers</p>
        </div>
        <div>
          <p className="text-xl font-semibold">89</p>
          <p className="text-sm text-gray-600">Following</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <Link href="/Lists/Been">
          <button className="bg-green-700 text-white px-6 py-3 rounded-xl shadow hover:bg-green-800 transition">
            Restaurants I’ve Been To
          </button>
        </Link>
        <Link href="/Lists/ToTry">
          <button className="bg-green-700 text-white px-6 py-3 rounded-xl shadow hover:bg-green-800 transition">
            Restaurants I Want to Try
          </button>
        </Link>
      </div>

      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-semibold text-green-900 mb-4">Your Feed</h2>
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 rounded-xl shadow border border-gray-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <CgProfile size={32} className="text-green-800" />
                <span className="font-medium text-gray-800">
                  @{post.username}
                </span>
              </div>
              <h2 className="font-semibold text-lg text-green-900">
                You tried {post.restaurant}
              </h2>
              <h4 className="text-sm text-gray-500">{post.location}</h4>
              <p className="text-gray-700 mt-1">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
