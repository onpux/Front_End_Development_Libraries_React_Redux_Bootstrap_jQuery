import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 text-center mt-5">
      <p className="mb-0">&copy; {new Date().getFullYear()} Jesús Antonio Marulanda Mariño. Todos los derechos reservados.</p>
      <small>Contacto: onputrevor1@gmail.com</small>
    </footer>
  );
};

export default Footer;
