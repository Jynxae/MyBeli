import React from "react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full bg-green-800 text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <p className="text-sm sm:text-base">Created by Reem Alkhalily</p>
        <Link
          href="https://github.com/Jynxae/MyBeli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub size={32} className="hover:text-gray-300 transition" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
