// /src/layouts/ProjectLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectLayout = ({ title, children }) => {
  return (
    <>
      <Navbar />
      <section className="container my-5">
        <h2 className="mb-4">{title}</h2>
        {children}
      </section>
      <Footer />
    </>
  );
};

export default ProjectLayout;
