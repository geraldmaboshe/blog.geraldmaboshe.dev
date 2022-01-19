import React, { Component } from "react";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Navigation from "./Navigation";

export function Layout({ children }) {
  return (
    <div className="mx-8 my-8 md:mx-32 md:my-8">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
