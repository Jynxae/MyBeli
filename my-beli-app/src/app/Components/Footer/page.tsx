import React from "react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const page = () => {
  return (
    <div className="w-full h-20 bottom-0 bg-green-800">
      <div className="flex justify-center mt-12">
        <SiGithub size={48} />
        Created by Reem Alkhalily
      </div>
    </div>
  );
};

export default page;
