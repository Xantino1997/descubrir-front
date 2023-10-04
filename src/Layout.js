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
