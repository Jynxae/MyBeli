import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-20 top-0 bg-green-800 sticky">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <ul className="flex gap-x-24 text-white mt-7">
            <li>
              <Link href="/HomeFeed">Home</Link>
            </li>
            <li>About</li>
            <li>Your Lists</li>
            <li>
              <Link href="\Sign-In">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default page;
