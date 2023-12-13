import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <header className=" text-2xl bg-zinc-500 w-full px-4 py-4   flex items-center justify-between  rounded-xl mt-4">
        <h1 className="text-2xl text-yellow-400">Book App</h1>
        <div className="flex  gap-2">
          <p className="text-md text-violet-900 font-bold"> Botostart </p>
          <p>| react js cource </p>
        </div>
      </header>

      {children}


      <footer className=" text-2xl bg-zinc-500  w-full px-4 py-4   flex items-center justify-center  rounded-xl mt-4">
      <h1 className="text-2xl text-yellow-400">developed by hasan</h1>

      </footer>
    </>
  );
}
