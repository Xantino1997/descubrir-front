import React from "react";
import "../StylesPages/Post.css";
import profileAvatar from "../assets/profile.png";
import imgDigital from "../assets/DIGITAL.png";

const Post = () => {
  const user = "Gabot";
  const title = "Digitalizar tu Negocio: Una Oportunidad para el Futuro";
  const content = "";
  const img = "../assets/DIGITAL.png";
  const profileImg = { profileAvatar }; // Reemplaza "ruta/hacia/img_de_perfil.jpg" con la ruta real de la imagen de perfil.

  const currentDate = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="post-container">
      <h1>{title}</h1>
      <div className="post-user">
        <img
          src={profileAvatar}
          alt="Imagen de perfil"
          className="profile-img"
        />
        <p>Escrito por: {user}</p>
      </div>
      <div className="post-image">
        <img src={imgDigital} alt={title} />
      </div>
      <div className="post-content">
        <p>
          La digitalización del negocio ha pasado de ser una opción a
          convertirse en una necesidad para empresas de todos los tamaños.
          <br />A medida que la tecnología avanza, no solo se vuelve más
          accesible, sino que también ofrece una gran cantidad de beneficios
          para mejorar la eficiencia y la competitividad.
          <br />
          Descubrir Digital puede ser una oportunidad clave para impulsar tu
          negocio hacia el éxito. A continuación, te presento tres razones por
          las que sería óptimo digitalizar tu negocio y cómo <br />
          <h3>
            <b>Descubrir Digital</b>
          </h3>
          puede ayudarte a lograrlo:";
        </p>
        <h2>1. Eficiencia Operativa Mejorada:</h2>
        <p>
          Digitalizar tu negocio implica automatizar y agilizar procesos que
          solían ser manuales. Con herramientas digitales, como software de
          gestión empresarial, plataformas de ventas en línea y sistemas de
          contabilidad automatizados, podrás ahorrar tiempo y recursos valiosos.
          Además, la información estará centralizada, facilitando el acceso y
          análisis de datos para tomar decisiones informadas y oportunas.
        </p>

        <h2>2. Ampliación del Alcance del Mercado:</h2>
        <p>
          Con la digitalización, tu negocio dejará de estar limitado a una
          ubicación física. Podrás llegar a clientes potenciales en cualquier
          parte del mundo a través de tu sitio web, redes sociales y plataformas
          de comercio electrónico. Esto te permitirá expandir tu mercado y
          aumentar tus oportunidades de venta.
        </p>

        <h2>3. Mejora de la Experiencia del Cliente:</h2>
        <p>
          La digitalización no solo beneficia a tu negocio, sino también a tus
          clientes. Con la posibilidad de realizar compras en línea, recibir
          asistencia en tiempo real y acceder a información de productos o
          servicios, tus clientes disfrutarán de una experiencia más rápida y
          conveniente.
        </p>
      </div>
      <p className="post-date">Fecha de publicación: {currentDate}</p>
    </div>
  );
};

export default Post;
