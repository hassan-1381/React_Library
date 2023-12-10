import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <header className=" text-2xl bg-zinc-700 w-full  flex items-center  justify-around ">
        <h1>
          Book App
        </h1>
        <div>

          <p>Botostart</p>
          <p> | react js cource </p>
        </div>

      </header>
      {children}
      <footer>footer</footer>
    </>
  );
}
