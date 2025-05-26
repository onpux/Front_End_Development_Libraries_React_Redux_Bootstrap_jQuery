import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import App1 from "./pages/App1";
import App2 from "./pages/App2";
import App3 from "./pages/App3";
import Contacto from "./pages/Contacto";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app1" element={<App1 />} />
          <Route path="/app2" element={<App2 />} />
          <Route path="/app3" element={<App3 />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

