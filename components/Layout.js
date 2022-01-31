import React, { Component } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

export function Layout({ children }) {
  return (
    <div className="mx-8 my-8 lg:mx-32 lg:my-8">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
