
import "../StylesPages/Terminos.css";
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1>Términos y Condiciones de Uso</h1>
      <div className="terms-content">
        <h2>1. Introducción</h2>
        <p>
          Bienvenido a nuestro sitio web. Al acceder y utilizar este sitio web,
          usted acepta estos términos y condiciones de uso. Si no está de acuerdo
          con alguno de los términos y condiciones, por favor absténgase de utilizar
          este sitio web.
        </p>
        
        <h2>2. Uso del Sitio Web</h2>
        <p>
          El uso de este sitio web se rige por los siguientes términos y condiciones:
          <ul>
            <li>Toda la información proporcionada en este sitio web es solo para fines informativos.</li>
            <li>Usted es responsable de mantener la confidencialidad de su información de cuenta.</li>
            <li>No debe utilizar este sitio web de manera que pueda causar daño o afectar su disponibilidad.</li>
          </ul>
        </p>
        
        <h2>3. Derechos de Autor</h2>
        <p>
          Todos los contenidos y materiales presentes en este sitio web, incluyendo, pero no limitado a,
          textos, imágenes, gráficos, logotipos, sonidos, videos, y el diseño del sitio web, están
          protegidos por derechos de autor y son propiedad de [Descubrir Digital] o sus respectivos
          titulares de derechos. Ninguna parte de estos materiales puede ser modificada, copiada, distribuida,
          enmarcada, reproducida, republicada, descargada, extraída, mostrada, transmitida, o
          vendida en cualquier forma o por cualquier medio, total o parcialmente, sin el permiso previo por
          escrito del titular de los derechos de autor.
        </p>
      </div>
      
      <p className="copyright">
        &copy; {new Date().getFullYear()} Descubrir Digital. Todos los derechos reservados.
      </p>
    </div>
  );
};

export default TermsAndConditions;
