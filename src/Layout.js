<<<<<<< HEAD
import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Chatbot from "./ChatBot";

function Layout() {
  return (
    <main style={{ padding: '10px', paddingTop: '0px' }}>
      <Header />
      <br />
      <br />
      <br />
      <Outlet />
      <Chatbot />
      <br />
      <br />
      <br />
      <Footer />
    </main>
  );
}

export default Layout;
=======
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

>>>>>>> 1969103dce9201a01eba2b7a76c33f36a18375f8
