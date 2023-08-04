import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "../StylesPages/Diamante.css";

const DiamondLetter = () => {
  const [showText, setShowText] = useState(true); // Inicia como true para mostrar el diamante

  useEffect(() => {
    const showCircleTimer = setTimeout(() => {
      setShowText(false); // Después de 5 segundos, oculta el diamante y redirige
    }, 5000);

    return () => {
      clearTimeout(showCircleTimer);
    };
  }, []);

  return (
    <>
      {showText ? ( // Muestra el diamante mientras showText sea true
        <div className="diamond-container">
          <div className="diamond">
            <h1 className="diamond-D-D">D-D</h1>
            <div className="conteiner-letter-diamond"></div>
          </div>
        </div>
      ) : (
        <Navigate to="/" /> // Redirige a la página de inicio cuando showText sea false
      )}
    </>
  );
};

export default DiamondLetter;
