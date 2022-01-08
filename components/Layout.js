import React, { Component } from "react";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Navigation from "./Navigation";

export function Layout({ children }) {
  return (
    <div className="container max-auto px-64 py-8">
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
