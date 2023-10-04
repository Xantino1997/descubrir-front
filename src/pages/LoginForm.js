import React, { useState, useEffect } from "react";
import "../StylesPages/LoginForm.css";
import img1 from "../assets/gatosPc.png";
import img2 from "../assets/fondoPc.png";
import img3 from "../assets/pcConjunto.png";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  const backgrounds = [`url(${img1})`, `url(${img2})`, `url(${img3})`];


  useEffect(() => {
    setCurrentBackgroundIndex(Math.floor(Math.random() * backgrounds.length));
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
  

    // Aquí realizarías la petición fetch al backend para iniciar sesión
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Guardar el token en sessionStorage
        sessionStorage.setItem("authToken", data.token);
        setErrorMessage("");
      } else {
        setErrorMessage("Credenciales incorrectas. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setErrorMessage("Ha ocurrido un error. Inténtalo de nuevo más tarde.");
    }
  };

  return (
    <div
      className="form-container"
      style={{
        
        backgroundImage: backgrounds[currentBackgroundIndex],
      }}
    >
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Iniciar Sesión</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default LoginForm;
