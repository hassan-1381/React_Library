import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <header className=" text-2xl bg-zinc-700 w-[1000px] px-4 py-4   flex items-center justify-between  rounded-xl">
        <h1  className="text-2xl text-yellow-400">
          Book App
        </h1>
        <div className="flex  gap-2">

          <p className="text-md text-violet-600"> Botostart </p>
          <p>| react js cource </p>
        </div>

      </header>


      {children}
      <footer>footer</footer>
    </>
  );
}
