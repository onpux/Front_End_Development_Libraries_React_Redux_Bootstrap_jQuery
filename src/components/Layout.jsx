import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
