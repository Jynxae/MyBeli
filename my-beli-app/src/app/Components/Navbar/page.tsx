"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const page = () => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => setShowList((prev) => !prev);
  return (
    <div className="w-full h-20 top-0 bg-green-300 sticky relative">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <ul className="flex gap-x-24 text-black mt-7">
            <li>
              <Link href="/HomeFeed">
                <button className="hover:bg-green-100 px-2 py-2 rounded-md transition">
                  Home
                </button>
              </Link>
            </li>
            <Link href="/Getting-Started">
              <button className="hover:bg-green-100 px-2 py-2 rounded-md transition">
                <li>About</li>
              </button>
            </Link>
            <li className="relative">
              <button
                onClick={toggleList}
                className="hover:bg-green-100 px-2 py-2 rounded-md transition"
              >
                Your Lists <MdOutlineArrowDropDown />
              </button>
              {showList && (
                <ul className="absolute top-full mt-2 bg-white border rounded-md shadow-md p-2 space-y-2 text-sm z-10">
                  <li>
                    <Link href="/Lists/Been">Been</Link>
                  </li>
                  <li>
                    <Link href="/Lists/ToTry">To Try</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="\Profile">
                <button className="hover:bg-green-100 px-2 py-2 rounded-md transition">
                  Profile
                </button>
              </Link>
            </li>
          </ul>
          <div className="Absolute left-0">
            <CgProfile size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
