"use client";
import React from "react";
import { CgProfile } from "react-icons/cg";

const page = () => {
  return (
    <main className="min-h-screen bg-green-50 flex flex-col px-4 py-6 relative">
      <div className="absolute left-72 top-24">
        <CgProfile size={200} />
      </div>
      <div>Follower Following</div>
    </main>
  );
};

export default page;
