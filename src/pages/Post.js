import React, { useState } from "react";
import "../StylesPages/Post.css";
import profileAvatar from "../assets/profile.png";
import imgDigital from "../assets/DIGITAL.png";
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
      content:
        "La digitalización del negocio ha pasado de ser una opción a convertirse en una necesidad para empresas de todos los tamaños.\nA medida que la tecnología avanza, no solo se vuelve más accesible, sino que también ofrece una gran cantidad de beneficios para mejorar la eficiencia y la competitividad. Descubrir Digital puede ser una oportunidad clave para impulsar tu negocio hacia el éxito. A continuación, te presento tres razones por las que sería óptimo digitalizar tu negocio y cómo Descubrir Digital puede ayudarte a lograrlo:\n\n1. Eficiencia Operativa Mejorada:\nDigitalizar tu negocio implica automatizar y agilizar procesos que solían ser manuales. Con herramientas digitales, como software de gestión empresarial, plataformas de ventas en línea y sistemas de contabilidad automatizados, podrás ahorrar tiempo y recursos valiosos. Además, la información estará centralizada, facilitando el acceso y análisis de datos para tomar decisiones informadas y oportunas.\n\n2. Ampliación del Alcance del Mercado:\nCon la digitalización, tu negocio dejará de estar limitado a una ubicación física. Podrás llegar a clientes potenciales en cualquier parte del mundo a través de tu sitio web, redes sociales y plataformas de comercio electrónico. Esto te permitirá expandir tu mercado y aumentar tus oportunidades de venta.\n\n3. Mejora de la Experiencia del Cliente:\nLa digitalización no solo beneficia a tu negocio, sino también a tus clientes. Con la posibilidad de realizar compras en línea, recibir asistencia en tiempo real y acceder a información de productos o servicios, tus clientes disfrutarán de una experiencia más rápida y conveniente.",
      img: imgDigital,
    },
    {
      user: "Gabriel",
      title: "Generar Leads: Clave para el Éxito Empresarial en la Era Digital",
      content:
        "En el mundo empresarial actual, la generación de leads se ha convertido en un componente esencial para el crecimiento y la prosperidad de cualquier empresa. Un lead es un cliente potencial que ha mostrado interés en los productos o servicios que tu empresa ofrece. La generación de leads efectiva es fundamental para construir una base sólida de clientes y aumentar las ventas. En este artículo, exploraremos cómo crear un buen lead para tu empresa, los puntos clave a considerar y cómo el descubrimiento digital puede ser una herramienta invaluable en este proceso. Ahora respondamos una pregunta que quizás te hagas...\n\n¿Qué es un Lead? Historia y Significado\n\nEn el mundo del marketing y los negocios, un lead es mucho más que un simple contacto. Representa una oportunidad real para establecer una conexión valiosa con posibles clientes. El concepto de lead ha evolucionado a lo largo del tiempo, pasando de ser un simple nombre en una lista a un cliente potencial con un interés genuino en los productos o servicios que tu empresa ofrece.\n\nEn sus inicios, el término 'lead' se utilizaba principalmente en el ámbito de las ventas, haciendo referencia a los posibles clientes que habían mostrado algún nivel de interés en un producto o servicio. Con la digitalización y el avance de las estrategias de marketing, el concepto de lead se ha expandido para incluir interacciones en línea, como visitas a sitios web, interacción en redes sociales y suscripciones a boletines informativos.\n\nEn la actualidad, generar y gestionar leads de manera efectiva es esencial para el éxito de cualquier negocio. La generación de leads se ha convertido en una disciplina fundamental en el marketing digital, impulsando la innovación en estrategias de contenido, automatización y personalización para lograr conexiones más auténticas y duraderas con la audiencia.\n\nAsí que queda claro que un lead de calidad es mucho más que una simple lista de contactos. Representa una oportunidad real para nutrir una relación con clientes potenciales, brindándoles valor y construyendo confianza. Los leads bien gestionados pueden convertirse en clientes leales y embajadores de tu marca. Pero, ¿cómo crear leads efectivos?\n\nPuntos Importantes a Considerar\n\n1. Conoce a tu Audiencia Objetivo:\nAntes de crear cualquier lead, es fundamental comprender a quién te diriges. Define tu público objetivo en función de datos demográficos, intereses, necesidades y comportamientos. Cuanto mejor entiendas a tu audiencia, más personalizados y atractivos podrán ser tus leads.\n\n2. Ofrece Contenido de Valor:\nUna estrategia efectiva de generación de leads se basa en ofrecer contenido valioso y relevante. Esto puede incluir ebooks, guías, webinars, infografías, entre otros. Asegúrate de que tu contenido aborde los problemas y desafíos de tu audiencia, brindando soluciones concretas.\n\n3. Landing Pages Optimizadas:\nLas landing pages son el punto de entrada para tus leads. Asegúrate de que sean atractivas, con un diseño limpio y una propuesta de valor clara y convincente. Utiliza formularios de captura de datos precisos y relevantes para no abrumar a los visitantes.\n\n4. Call to Action (CTA) Efectivos:\nLos CTA son los impulsadores que guían a los visitantes a convertirse en leads. Utiliza textos persuasivos y colores contrastantes para que se destaquen. Los CTA deben ser claros y orientados a la acción.\n\n5. Automatización y Seguimiento:\nLas herramientas de automatización de marketing pueden agilizar el proceso de seguimiento de leads. Utiliza secuencias de correos electrónicos y mensajes personalizados para mantener el compromiso con tus leads a lo largo del tiempo.\n\nDescubrimiento Digital y su Rol en la Generación de Leads\n\nEl descubrimiento digital juega un papel fundamental en la generación de leads en la era moderna. Aquí hay algunas formas en las que puede ayudar:\n\n1. Optimización de Motores de Búsqueda (SEO):\nAsegurarte de que tu sitio web esté optimizado para motores de búsqueda aumentará su visibilidad en línea. Esto facilita que los clientes potenciales te encuentren cuando buscan productos o servicios relacionados.\n\n2. Contenido de Calidad:\nCrear contenido relevante y de alta calidad en tu sitio web y blog no solo demuestra tu experiencia, sino que también atrae a visitantes interesados. Esto puede convertirse en una fuente constante de nuevos leads.\n\n3. Presencia en Redes Sociales:\nLas redes sociales son plataformas ideales para interactuar con tu audiencia. Comparte contenido valioso, responde a preguntas y participa en conversaciones relevantes para establecer una relación sólida con los leads.\n\nConclusión:\n\n- Resumen de los puntos clave: La generación de leads es esencial para el crecimiento empresarial. Comprender a tu audiencia, ofrecer contenido valioso, optimizar las landing pages, utilizar CTA efectivos y automatizar el seguimiento son pasos cruciales.\n- Invitación a obtener más contenido: Si encontraste útiles estos consejos, te invitamos a suscribirte para recibir más información sobre estrategias de generación de leads y marketing digital en nuestro canal. Además, ¡no dudes en seguirnos en nuestras redes sociales para estar al tanto de las últimas novedades y obtener aún más consejos y recursos para impulsar tu negocio!",
      img: leads,
    },
    {
      user: "Gabriel",
      title: "Solicitud de Información sobre Productos",
      content:
        "Hola, estoy interesado en obtener más información sobre los productos y servicios que su empresa ofrece. Me gustaría saber más sobre sus características, precios y disponibilidad. ¿Podrían proporcionarme detalles adicionales o ponerme en contacto con un representante de ventas? Gracias.\n\nTe haz topado con un mensaje comoe este alguna vez?. Eso es muy bueno, veamos por que \n\nProspecto en Marketing Digital:\n\nEn el contexto del marketing digital, un prospecto es un cliente potencial que ha mostrado un nivel significativo de interés en los productos o servicios de una empresa. En este caso, la persona que ha enviado esta solicitud de información es un ejemplo de prospecto. Los prospectos suelen estar más avanzados en el proceso de compra y requieren una atención especializada para convertirse en clientes. Es importante seguir nutriendo a los prospectos con información relevante y brindarles respuestas a sus preguntas para impulsar la conversión.",
      img: prospecto,
    },
    {
      user: "Gabriel",
      title: "Diferencias Entre Leads y Prospectos en el Marketing",
      content:
        "En el mundo del marketing y las ventas, es común escuchar los términos 'lead' y 'prospecto'. Ambos se refieren a personas que han mostrado interés en los productos o servicios de una empresa, pero existen diferencias clave entre ellos que es importante comprender.\n\nLeads:\n\nUn lead es alguien que ha proporcionado sus datos de contacto o ha realizado alguna acción que indica un interés inicial en lo que tu empresa ofrece. Por ejemplo, un lead podría ser alguien que ha llenado un formulario en tu sitio web, se ha suscrito a tu boletín informativo o ha descargado un recurso, como un ebook. Los leads son, en general, contactos fríos que necesitan más seguimiento y nutrición para convertirse en clientes.\n\nProspectos:\n\nUn prospecto, por otro lado, es un lead que ha avanzado en el proceso de ventas y ha demostrado un mayor nivel de interés y compromiso. Los prospectos suelen ser más calificados y están más cerca de convertirse en clientes. Han interactuado con tu empresa de manera más significativa y pueden haber expresado su intención de comprar. Los prospectos son contactos cálidos y están más cerca de la conversión.\n\nEn resumen, la principal diferencia radica en el nivel de interacción y compromiso. Los leads son contactos iniciales que requieren un esfuerzo adicional para convertirse en prospectos y, eventualmente, en clientes. Los prospectos, por otro lado, son leads más calificados que están más cerca de tomar una decisión de compra.\n\nEs importante tener estrategias de marketing y ventas específicas para nutrir tanto a los leads como a los prospectos de manera efectiva y convertirlos en clientes satisfechos.",
      img: diferencias,
    },
  ];

  const postsPerPage = 2; // Cantidad de posts por página
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentDate = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
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
            {post.content.split("\n\n").map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}
          </div>
          <p className="post-date">Fecha de publicación: {currentDate}</p>
        </div>
      ))}

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>
          {currentPage} de {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </>
  );
};

export default Post;
