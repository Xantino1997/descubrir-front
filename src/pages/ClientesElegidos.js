import React, { useState, useEffect } from "react";
import "../StylesPages/ClientesElegidos.css";
import far from "../assets/F.A.R.png";
import sentidos from "../assets/Sentidos.png";
import comunidad from "../assets/comunidad.png";

const ClientesElegidos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 3; // Cantidad de clientes por página

  // Supongamos que tienes una lista de clientes como esta:
  const clientes = [
    {
      nombre: "F.A.R Servicios",
      razon: "Nos eligen por su excelente servicio al cliente.",
      imagen: far,
      enlace: "https://far-servicios.vercel.app",
      clase: "cliente-far", // Agrega una propiedad clase para cada cliente
    },
    {
      nombre: "Sentidos ONG",
      razon: "Nos eligen por la calidad de nuestros productos.",
      imagen: sentidos,
      enlace: "https://sentidos.vercel.app",
      clase: "cliente-sentidos", // Agrega una propiedad clase para cada cliente
    },
    {
      nombre: "Comunidad Mocovi",
      razon: "Nos eligen por nuestra experiencia en el mercado.",
      imagen: comunidad,
      enlace: "https://centromocovi.vercel.app",
      clase: "cliente-comunidad", // Agrega una propiedad clase para cada cliente
    },
  ];

  // Calcula el índice del último cliente en la página actual
  const indexOfLastClient = currentPage * clientsPerPage;
  // Calcula el índice del primer cliente en la página actual
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  // Obtiene los clientes para la página actual
  const currentClients = clientes.slice(indexOfFirstClient, indexOfLastClient);

  // Cambiar de página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Al montar el componente, establece la página actual en 1
    setCurrentPage(1);
  }, []); // El arreglo vacío asegura que esto solo se ejecute una vez al montar el componente

  return (
    <div className="clientes-div">
      <h2>Nuestros Clientes</h2>
      
      {currentClients.map((cliente, index) => (
        <div className={`cliente-completo ${cliente.clase}`} key={index}>
          <h3>{cliente.nombre}</h3>
          <p>{cliente.razon}</p>
          <img src={cliente.imagen} alt={`Imagen de ${cliente.nombre}`} />
          <a href={cliente.enlace} target="_blank" rel="noopener noreferrer">
            Visitar el sitio
          </a>
        </div>
      ))}
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        {clientes.length > clientsPerPage &&
          Array.from(
            { length: Math.ceil(clientes.length / clientsPerPage) },
            (_, i) => (
              <button key={i} onClick={() => paginate(i + 1)}>
                {i + 1}
              </button>
            )
          )}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(clientes.length / clientsPerPage)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ClientesElegidos;
