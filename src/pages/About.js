import React from "react";
import { Fade } from "react-awesome-reveal"; // Importa Fade desde react-awesome-reveal
import Digital from "../assets/DIGITAL.WebP";
import TeamDigital from "../assets/Team-digital.png";
import "../StylesPages/About.css";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="conteiner-nosotros">
      <h1 className="titulo-about">Digitalizarte es posible</h1>
      <div className="about-section">
        <Fade direction="left" triggerOnce>
          {/* Wrap the image container with Fade for left animation */}
          <div className="image-container">
            <img src={TeamDigital} alt="Imagen 1" />
            <div className="overlay">
              <h2>Ayuda en línea</h2>
              <p>Estar en línea es imprescindible para el negocio.</p>
              <Link to="/post">Leer más</Link>
            </div>
          </div>
        </Fade>
      </div>
      <div className="about-section-text">
        {/* El contenido del componente */}
        <h1>Quienes somos</h1>
        <p>
          En una era digital que avanza a pasos agigantados, muchos van quedando
          resagados y sus oportunidades van desvanecer además de sus sueños, los
          recursos que necesitamos para alcanzar dichas metas.
        </p>
        <p>
          Es aquí donde entra Descubrir Digital, una idea que se transformó en
          un concepto y hoy es una realidad. Descubrir Digital tiene como
          premisa la meta de poder dar herramientas a esas personas que van
          camino a querer afrontar los desafíos de un negocio en esta era de
          máquinas voladoras.
        </p>
        <h3>Objetivos de nuestra web</h3>
        <p>
          Los objetivos de Descubrir Digital son esencialmente construir puentes
          y derribar muros. ¿Te has sentido alguna vez superado por la tecnología y
          que no sabes para dónde salir? <br />Te entendemos, por eso 
          <b> Descubrir Digital</b> te da la posibilidad de acercarte a un
          ordenador, celular o tablet y que, como autodidacta, aprendas a manejar
          herramientas óptimas para desarrollar tu actividad digital, esas
          herramientas existen y están al alcance de todos.
        </p>
      </div>
      <div className="about-section">
        <Fade direction="right" triggerOnce>
          {/* Wrap the image container with Fade for right animation */}
          <div className="image-container">
            <img src={Digital} alt="Imagen 2" />
            <div className="overlay">
              <h2>Posicionamiento para emprendedores</h2>
              <p>Descubrir Digital.</p>
              <Link to="/post">Leer más</Link>
            </div>
          </div>
        </Fade>
      </div>
      {/* Aquí incluir el código para el carousel con las otras 4 imágenes */}
      {/* Utiliza alguna librería de carousel como react-slick */}
    </div>
  );
};

export default About;
