// /src/layouts/MainLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container my-5">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
