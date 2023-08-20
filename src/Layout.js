import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Chatbot from "./ChatBot"; // Asegúrate de importar correctamente el componente Chatbot

function Layout() {
  return (
    <main style={{ padding: '10px', paddingTop: '0px' }}>
      <Header />
      <br />
      <br />
      <br />
      <Outlet />
      <Chatbot /> {/* Agrega el componente Chatbot aquí */}
      <br />
      <br />
      <br />
      <Footer />
    </main>
  );
}

export default Layout;
