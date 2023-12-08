import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <header>header</header>
      {children}
      <footer>footer</footer>
    </>
  );
}
