import React from "react";
import "../StylesPages/UIImportance.css";
import LandingPage from "../assets/landingPage.png";
import PageDB from "../assets/paginasDB.png";
import eComerce from "../assets/eComerce.png";

const UIImportance = () => {
  return (
    <>
      <div>
        <h1 id="inicio">
          La Importancia del Diseño de Interfaz de Usuario (UI)
        </h1>
        <p>
          El diseño de interfaz de usuario desempeña un papel crucial en la
          experiencia del usuario en un sitio web. A continuación, exploramos
          tres ejemplos comunes de diseño de UI y su importancia:
        </p>

        <div className="ui-importance-container">
          <div className="ui-section">
            <h2>Landing Page</h2>
            <p>
              Una buena landing page atrae la atención de los visitantes y los
              convierte en clientes potenciales. Es esencial para cualquier
              campaña de marketing exitosa.
            </p>
            <img src={LandingPage} alt="Ejemplo de Landing Page" />
            <br />

            <a className="ver-mas-pages" href="#landing-page">
              Ver Más
            </a>
            <br />
          </div>

          <div className="ui-section">
            <h2>Web con Base de Datos</h2>
            <p>
              Una interfaz de usuario eficiente en una aplicación web con base
              de datos mejora la experiencia del usuario al interactuar con
              datos y contenido dinámico. Facilita la gestión y visualización de
              información relevante.
            </p>
            <img src={PageDB} alt="Ejemplo de Web con Base de Datos" />
            <br />

            <a className="ver-mas-pages" href="#web-database">
              Ver Más
            </a>
          </div>

          <div className="ui-section">
            <h2>E-commerce</h2>
            <p>
              En un sitio de comercio electrónico, la UI es fundamental para
              mostrar productos de manera atractiva y facilitar el proceso de
              compra. Ayuda a los compradores a encontrar y adquirir productos
              fácilmente.
            </p>
            <img src={eComerce} alt="Ejemplo de E-commerce" />
            <br />
            <a className="ver-mas-pages" href="#e-commerce">
              Ver Más
            </a>
          </div>
        </div>

        <div className="landing-page" id="landing-page">
          <h1>Landing Page</h1>
          <p>
            Una Landing Page es una página web diseñada específicamente para una
            campaña o acción de marketing concreta. Su diseño limpio y atractivo
            tiene un enfoque en una llamada a la acción (CTA) destacada, lo que
            la convierte en una herramienta efectiva para convertir visitantes
            en clientes potenciales o finales. Algunos beneficios clave
            incluyen:
          </p>
          <ul>
            <li>Captura la atención de los visitantes de manera inmediata.</li>
            <li>Facilita la conversión de visitantes en leads o clientes.</li>
            <li>Mejora la eficacia de las campañas de marketing.</li>
          </ul>
          <br />
          <img src={LandingPage} />
        </div>

        <div className="web-database" id="web-database">
          <h1>Web con Base de Datos</h1>
          <p>
            Una Web con Base de Datos es ideal para aplicaciones web que
            interactúan con información dinámica almacenada en una base de
            datos. La interfaz de usuario eficiente mejora la experiencia del
            usuario al permitir la gestión y visualización de datos de manera
            efectiva. Algunos beneficios clave son:
          </p>
          <ul>
            <li>Interacción con información en tiempo real.</li>
            <li>Facilita la entrada y gestión de datos.</li>
            <li>Capacidad de búsqueda y filtrado de información.</li>
          </ul>
          <br />
          <img src={PageDB} alt="Inicio de Web con Base de Datos" />
        </div>

        <div className="e-commerce" id="e-commerce">
          <h1>E-commerce</h1>
          <p>
            Un sitio de E-commerce es esencial para vender productos o servicios
            en línea. Su diseño se centra en la presentación atractiva de
            productos y en la facilidad de uso para los compradores. Algunos
            beneficios clave incluyen:
          </p>
          <ul>
            <li>Exhibición atractiva de productos y catálogos.</li>
            <li>Facilita la experiencia de compra en línea.</li>
            <li>Ofrece opciones de pago seguras y convenientes.</li>
          </ul>
          <br />
          <img src={eComerce} alt="Inicio de E-commerce" />
        </div>
      </div>
      <a className="ver-mas-pages-inicio" href="#inicio">
       INICIO
      </a>
    </>
  );
};

export default UIImportance;
