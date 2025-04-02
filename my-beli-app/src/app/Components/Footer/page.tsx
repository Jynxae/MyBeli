import React from "react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const page = () => {
  return (
    <footer className=" flex justify-center items-center gap-x-24 w-full h-20 bottom-0 bg-green-800 text-white">
      <Link href="https://github.com/Jynxae/MyBeli" target="_blank">
        <SiGithub size={48} />
      </Link>
      Created by Reem Alkhalily
    </footer>
  );
};

export default page;
