import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import IndexPage from './pages/IndexPage';
import About from './pages/About';
import Post from './pages/Post';
import Desarrollo from './pages/Desarrollo';
import ClientesElegidos from './pages/ClientesElegidos';
import LoginForm from "./pages/LoginForm";
import ErrorDigital from "./pages/ErrorDigital";
import UIImportance from "./pages/UIImportance";
// import LoginForm from "./pages/LoginForm";
// import ErrorDigital from "./pages/ErrorDigital";
import Terminos from "./pages/Terminos";
import Diamante from "./pages/Diamante";
import Layout from './Layout';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/post" element={<Post />} />
            <Route path="/sign-in" element={<LoginForm />} />
            <Route path="/clientes" element={<ClientesElegidos />} />
            <Route path="/interfaz" element={<UIImportance />} />
            <Route path="/redirigiendo" element={<Diamante />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/error" element={<ErrorDigital />} />
            <Route path="/desarrollo" element={<Desarrollo />} />
            <Route path="/redirigiendo" element={<Diamante />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/error" element={<ErrorDigital />} />

            <Route path="*" element={<ErrorDigital />} /> {/* Ruta comodín para cualquier ruta no definida */}
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
