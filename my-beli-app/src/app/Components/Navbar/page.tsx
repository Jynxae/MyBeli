"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [showList, setShowList] = useState(false);
  const toggleList = () => setShowList((prev) => !prev);

  return (
    <nav className="w-full bg-green-300 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/Landing">
          <h1 className="text-2xl font-semibold text-black">Reem's Beli</h1>
        </Link>

        {/* Center: Nav links */}
        <ul className="flex gap-x-10 items-center text-black">
          <li>
            <Link href="/HomeFeed" className="hover:text-green-700 transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Getting-Started"
              className="hover:text-green-700 transition"
            >
              About
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={toggleList}
              className="flex items-center gap-1 hover:text-green-700 transition"
            >
              Your Lists <MdOutlineArrowDropDown />
            </button>
            {showList && (
              <ul className="absolute top-full mt-2 left-0 bg-white border rounded-md shadow-md p-2 text-sm space-y-1">
                <li>
                  <Link
                    href="/Lists/Been"
                    className="block px-3 py-1 hover:bg-gray-100 rounded"
                  >
                    Been
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Lists/ToTry"
                    className="block px-3 py-1 hover:bg-gray-100 rounded"
                  >
                    To Try
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Right: Profile Icon */}
        <Link href="/Profile">
          <button className="hover:text-green-700 transition">
            <CgProfile size={28} />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
