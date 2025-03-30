import React from "react";

const page = () => {
  return (
    <main className="min-h-screen bg-green-50 flex flex-col items-center justify-center text-center px-6">
      <h1>homefeed</h1>
      <div className="absolute top-10 left-10 w-24 h-24 bg-green-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-300 rounded-full opacity-20"></div>
    </main>
  );
};

export default page;
