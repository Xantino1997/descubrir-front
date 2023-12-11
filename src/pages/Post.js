import React, { useState, useEffect } from "react";
import "../StylesPages/Post.css";
import profileAvatar from "../assets/profile.png";
import imgDigital from "../assets/DIGITAL.avif";
import leads from "../assets/leads.png";
import prospecto from "../assets/prospecto.png";
import diferencias from "../assets/diferencias.png";
import bot from "../assets/icono-bot.png";

const Post = () => {
  const posts = [
    {
      user: "Gabot",
      avatar: bot,
      title: "Digitalizar tu Negocio: Una Oportunidad para el Futuro",
      content: `<div className="digitalization-text">
      <p>
        La digitalización del negocio ha pasado de ser una opción a convertirse en una necesidad para empresas de todos los tamaños. A medida que la tecnología avanza, no solo se vuelve más accesible, sino que también ofrece una gran cantidad de beneficios para mejorar la eficiencia y la competitividad. Descubrir Digital puede ser una oportunidad clave para impulsar tu negocio hacia el éxito.
      </p>
      <p>
        A continuación, te presento tres razones por las que sería óptimo digitalizar tu negocio y cómo Descubrir Digital puede ayudarte a lograrlo:
      </p>
      <ol>
        <li>
        <b><p>Eficiencia Operativa Mejorada:</p></b>
          <p>
            Digitalizar tu negocio implica automatizar y agilizar procesos que solían ser manuales. Con herramientas digitales, como software de gestión empresarial, plataformas de ventas en línea y sistemas de contabilidad automatizados, podrás ahorrar tiempo y recursos valiosos. Además, la información estará centralizada, facilitando el acceso y análisis de datos para tomar decisiones informadas y oportunas.
          </p>
        </li>
        <li>
        <b><p>Ampliación del Alcance del Mercado:</p></b>
          <p>
            Con la digitalización, tu negocio dejará de estar limitado a una ubicación física. Podrás llegar a clientes potenciales en cualquier parte del mundo a través de tu sitio web, redes sociales y plataformas de comercio electrónico. Esto te permitirá expandir tu mercado y aumentar tus oportunidades de venta.
          </p>
        </li>
        <li>
        <b><p>Mejora de la Experiencia del Cliente:</p></b>
          <p>
            La digitalización no solo beneficia a tu negocio, sino también a tus clientes. Con la posibilidad de realizar compras en línea, recibir asistencia en tiempo real y acceder a información de productos o servicios, tus clientes disfrutarán de una experiencia más rápida y conveniente.
          </p>
        </li>
      </ol>
    </div>
    `,
      img: imgDigital,
    },
    {
      user: "Gabriel",
      title: "Generar Leads: Clave para el Éxito Empresarial en la Era Digital",
      content: `<div id="prospecto>
      <p>"En el mundo empresarial actual, la generación de leads se ha convertido en un componente esencial para el crecimiento y la prosperidad de cualquier empresa. Un lead es un cliente potencial que ha mostrado interés en los productos o servicios que tu empresa ofrece. La generación de leads efectiva es fundamental para construir una base sólida de clientes y aumentar las ventas. En este artículo, exploraremos cómo crear un buen lead para tu empresa, los puntos clave a considerar y cómo el descubrimiento digital puede ser una herramienta invaluable en este proceso. Ahora respondamos una pregunta que quizás te hagas...</p>
    
      <p>¿Qué es un Lead? Historia y Significado</p>
    
      <p>En el mundo del marketing y los negocios, un lead es mucho más que un simple contacto. Representa una oportunidad real para establecer una conexión valiosa con posibles clientes. El concepto de lead ha evolucionado a lo largo del tiempo, pasando de ser un simple nombre en una lista a un cliente potencial con un interés genuino en los productos o servicios que tu empresa ofrece.</p>
    
      <p>En sus inicios, el término 'lead' se utilizaba principalmente en el ámbito de las ventas, haciendo referencia a los posibles clientes que habían mostrado algún nivel de interés en un producto o servicio. Con la digitalización y el avance de las estrategias de marketing, el concepto de lead se ha expandido para incluir interacciones en línea, como visitas a sitios web, interacción en redes sociales y suscripciones a boletines informativos.</p>
    
      <p>En la actualidad, generar y gestionar leads de manera efectiva es esencial para el éxito de cualquier negocio. La generación de leads se ha convertido en una disciplina fundamental en el marketing digital, impulsando la innovación en estrategias de contenido, automatización y personalización para lograr conexiones más auténticas y duraderas con la audiencia.</p>
    
      <p>Así que queda claro que un lead de calidad es mucho más que una simple lista de contactos. Representa una oportunidad real para nutrir una relación con clientes potenciales, brindándoles valor y construyendo confianza. Los leads bien gestionados pueden convertirse en clientes leales y embajadores de tu marca. Pero, ¿cómo crear leads efectivos?</p>
    
      <p>Puntos Importantes a Considerar</p>
    
      <p>1. Conoce a tu Audiencia Objetivo:<br>Antes de crear cualquier lead, es fundamental comprender a quién te diriges. Define tu público objetivo en función de datos demográficos, intereses, necesidades y comportamientos. Cuanto mejor entiendas a tu audiencia, más personalizados y atractivos podrán ser tus leads.</p>
    
      <p>2. Ofrece Contenido de Valor:<br>Una estrategia efectiva de generación de leads se basa en ofrecer contenido valioso y relevante. Esto puede incluir ebooks, guías, webinars, infografías, entre otros. Asegúrate de que tu contenido aborde los problemas y desafíos de tu audiencia, brindando soluciones concretas.</p>
    
      <p>3. Landing Pages Optimizadas:<br>Las landing pages son el punto de entrada para tus leads. Asegúrate de que sean atractivas, con un diseño limpio y una propuesta de valor clara y convincente. Utiliza formularios de captura de datos precisos y relevantes para no abrumar a los visitantes.</p>
    
      <p>4. Call to Action (CTA) Efectivos:<br>Los CTA son los impulsadores que guían a los visitantes a convertirse en leads. Utiliza textos persuasivos y colores contrastantes para que se destaquen. Los CTA deben ser claros y orientados a la acción.</p>
    
      <p>5. Automatización y Seguimiento:<br>Las herramientas de automatización de marketing pueden agilizar el proceso de seguimiento de leads. Utiliza secuencias de correos electrónicos y mensajes personalizados para mantener el compromiso con tus leads a lo largo del tiempo.</p>
    
      <p>Descubrimiento Digital y su Rol en la Generación de Leads</p>
    
      <p>El descubrimiento digital juega un papel fundamental en la generación de leads en la era moderna. Aquí hay algunas formas en las que puede ayudar:</p>
    
      <p>1. Optimización de Motores de Búsqueda (SEO):<br>Asegurarte de que tu sitio web esté optimizado para motores de búsqueda aumentará su visibilidad en línea. Esto facilita que los clientes potenciales te encuentren cuando buscan productos o servicios relacionados.</p>
    
      <p>2. Contenido de Calidad:<br>Crear contenido relevante y de alta calidad en tu sitio web y blog no solo demuestra tu experiencia, sino que también atrae a visitantes interesados. Esto puede convertirse en una fuente constante de nuevos leads.</p>
    
      <p>3. Presencia en Redes Sociales:<br>Las redes sociales son plataformas ideales para interactuar con tu audiencia. Comparte contenido valioso, responde a preguntas y participa en conversaciones relevantes para establecer una relación sólida con los leads.</p>
    
      <p>En resumen una valiosa clave para tu negocio es la generación de leads parte esencial para y hacia el crecimiento empresarial. Comprender a tu audiencia, ofrecer contenido valioso, optimizar las landing pages, utilizar CTA efectivos y automatizar el seguimiento son pasos cruciales.</p>
    
      <p>Pero, ¿qué sucede cuando el cliente avanza más allá de esta etapa? El siguiente link te llevará a otra herramienta fundamental. <a href="inicio2" class="link-herramientas">Haz clic aquí</a> para acceder a ella.</p>
    
      <p>Si encontraste útiles estos consejos, te invitamos a suscribirte a nuestro Newsletter para recibir más información sobre estrategias de generación de leads y marketing digital. Además, ¡no dudes en seguirnos en nuestras redes sociales para estar al tanto de las últimas novedades y obtener aún más consejos y recursos para impulsar tu negocio!</p>
    </div>
    `,
      img: leads,
    },
    {
      user: "Gabriel",
      title: "Solicitud de Información sobre Productos",
      content: `<div className="text-container" id="inicio2">
      <em style={{ fontFamily: 'cursive', fontStyle: 'italic' }}>
      "Hola, estoy interesado en obtener más información sobre los productos y servicios que su empresa ofrece. Me gustaría saber más sobre sus características, precios y disponibilidad. ¿Podrían proporcionarme detalles adicionales o ponerme en contacto con un representante de ventas? Gracias."
      </em>    
      <p>¿Te has topado con un mensaje como este alguna vez? Eso es muy bueno, veamos por qué.</p>
    
      <p><strong>Prospecto en Marketing Digital:</strong></p>
      <p>En el contexto del marketing digital, un prospecto es un cliente potencial que ha mostrado un nivel significativo de interés en los productos o servicios de una empresa. En este caso, la persona que ha enviado esta solicitud de información es un ejemplo de prospecto. Los prospectos suelen estar más avanzados en el proceso de compra y requieren una atención especializada para convertirse en clientes. Es importante seguir nutriendo a los prospectos con información relevante y brindarles respuestas a sus preguntas para impulsar la conversión.</p>
    </div>
    `,
      img: prospecto,
    },
    {
      user: "Gabriel",
      title: "Diferencias Entre Leads y Prospectos en el Marketing",
      content: `<div className="text-container">
      <p><strong>En el mundo del marketing y las ventas, es común escuchar los términos 'lead' y 'prospecto'. Ambos se refieren a personas que han mostrado interés en los productos o servicios de una empresa, pero existen diferencias clave entre ellos que es importante comprender.</strong></p>
    
      <p><strong>Leads:</strong></p>
      <p>Un lead es alguien que ha proporcionado sus datos de contacto o ha realizado alguna acción que indica un interés inicial en lo que tu empresa ofrece. Por ejemplo, un lead podría ser alguien que ha llenado un formulario en tu sitio web, se ha suscrito a tu boletín informativo o ha descargado un recurso, como un ebook. Los leads son, en general, contactos fríos que necesitan más seguimiento y nutrición para convertirse en clientes.</p>
    
      <p><strong>Prospectos:</strong></p>
      <p>Un prospecto, por otro lado, es un lead que ha avanzado en el proceso de ventas y ha demostrado un mayor nivel de interés y compromiso. Los prospectos suelen ser más calificados y están más cerca de convertirse en clientes. Han interactuado con tu empresa de manera más significativa y pueden haber expresado su intención de comprar. Los prospectos son contactos cálidos y están más cerca de la conversión.</p>
    
      <p>En resumen, la principal diferencia radica en el nivel de interacción y compromiso. Los leads son contactos iniciales que requieren un esfuerzo adicional para convertirse en prospectos y, eventualmente, en clientes. Los prospectos, por otro lado, son leads más calificados que están más cerca de tomar una decisión de compra.</p>
    
      <p>Es importante tener estrategias de marketing y ventas específicas para nutrir tanto a los leads como a los prospectos de manera efectiva y convertirlos en clientes satisfechos.</p>
    </div>
    `,
      img: diferencias,
    },
  ];

  const postsPerPage = 2; // Cantidad de posts por página
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Función para realizar el desplazamiento suave hacia arriba de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop(true);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop(true);
    }
  };

  const currentDate = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Efecto secundario para controlar la visibilidad del botón de desplazamiento
  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón de desplazamiento cuando el usuario ha bajado una cierta cantidad de píxeles
      if (window.pageYOffset > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Estado para controlar la visibilidad del botón de desplazamiento
  const [showScrollButton, setShowScrollButton] = useState(false);

  return (
    <div className="post-wrapper">
      {currentPosts.map((post, index) => (
        <div className="post-container" key={index}>
          <h1>{post.title}</h1>
          <div className="post-user">
            <img
              src={post.avatar || profileAvatar}
              alt="Imagen de perfil"
              className="profile-img"
            />
            <p>@uthor: {post.user}</p>
          </div>
          <div className="post-image">
            <img src={post.img} alt={post.title} />
          </div>

          <div className="post-content">
            {/* Utiliza dangerouslySetInnerHTML para renderizar el contenido HTML */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          <p className="post-date">Fecha de publicación: {currentDate}</p>
        </div>
      ))}

      <div className="pagination">
        <button
          onClick={() => {
            handlePrevPage();
            scrollToTop();
          }}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>
          {currentPage} de {totalPages}
        </span>
        <button
          onClick={() => {
            handleNextPage();
            scrollToTop();
          }}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>

      {showScrollButton && (
        <button className="scroll-button" onClick={scrollToTop}>
          Subir
        </button>
      )}
    </div>
  );
};

export default Post;
