/* Estilos para la vista de escritorio (PC) */
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");

.home-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.diseños-container {
  z-index: 60;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  font-family: "Amatic SC", cursive;
  display: flex;
  justify-content: space-around;
  background: transparent;
}

.img-desarrollo {
  width: 20rem; /* Ancho en rem */
  height: 15rem; /* Alto en rem */
  background-size: cover;
  backdrop-filter: blur(500px); /* Agrega desenfoque al fondo */
  background-color: rgba(255, 255, 255, 0.3);
}

.diseños-rutas1 {

  text-align: center;
  height: 50%;
  top: 50%;
  padding: 10px;
  margin: 15px;
  margin-top: 100px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);

}
.diseños-rutas2 {

  text-align: center;
  height: 50%;
  top: 50%;
  padding: 10px;
  margin: 15px;
  margin-top: 100px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);

}
.diseños-rutas3 {
  text-align: center;
  height: 50%;
  top: 50%;
  padding: 10px;
  margin: 15px;
  margin-top: 100px;
  cursor: pointer;
  background: rgba(00, 00, 00, 0.5);

}

.diseños-rutas1 {
  animation-delay: 0s; /* Retraso inicial */
}

.diseños-rutas2 {
  animation-delay: 1s; /* Retraso para crear un desfase */
}

.diseños-rutas3 {
  animation-delay: 2s; /* Retraso para crear un desfase */
}

@keyframes electric-border {
  0% {
    border-color: lightgreen; /* Color inicial */
    background: transparent; /* Color inicial */
  }
  33% {
    border-color: blue; /* Primer cambio de color */
    background: rgba(255, 255, 255, 0.1);
  }
  66% {
    border-color: orange; /* Segundo cambio de color */
    background: rgba(0, 0, 0, 0.7); 
  }
  100% {
    border-color: lightgreen; /* Volver al color inicial */
    background: rgba(255, 255, 255, 0.1);
  }
}
.diseños-h1 {
  color: #fff !important;
  z-index: 66;
  font-size: 35px;
  font-weight: bold;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #121;
  opacity: 0.8;
  z-index: 1;
}

.brand {
  position: absolute;
  left: 0;
  top: 0;
  border: #000 solid 2px;
  padding-left: 10px;
  padding-right: 10px;
  width: 30%;
  height: 99.5%;
  background-image: url("../assets/DIGITAL.png");
  background-size: cover;
  background-position: center;
  z-index: 2;
}

.title-home {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: #fff !important;
  text-align: center;
  z-index: 3;
}

.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.form-modal {
  display: flex;
  text-align: center;
  margin: 30px;
}

.form-modal input {
  display: flex;
  text-align: center;
  margin: 30px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 55;
}

.modal {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
}

.modal h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.modal p {
  font-size: 16px;
  margin-bottom: 20px;
}

.modal button {
  background-color: #d60000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 5px;
}

.modal button.secondary {
  background-color: #555;
}

.modal button:hover {
  background-color: #d60000;
}

/* Estilos para la vista de dispositivos móviles (celulares) */
@media (max-width: 768px) {
  .title-home {
    font-size: 36px;
    top: 35%;
  }

  .brand {
    left: 0;
    right: 0;
    top: 100px;
    margin: 0 auto;
    width: 70%;
    height: 70px;
    background-image: url("../assets/DIGITAL.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border: none; /* Eliminamos el borde en dispositivos móviles */
    padding: 0; /* Eliminamos el padding en dispositivos móviles */
  }

  .diseños-container {
    z-index: 90;
    position: absolute;
    width: 100%;
    top:10rem;
    height: 50%;
    text-align: center;
    font-family: "Amatic SC", cursive;
    display: flex;
    flex-direction: column; /* Cambiamos la dirección del flujo a vertical */
    align-items: center; /* Centramos horizontalmente */
    background: transparent;
  }

  .img-desarrollo {
    width: 50%; /* Ancho del 100% para ocupar todo el ancho disponible */
    height: 30%; /* Altura automática para mantener la proporción */
    background-size: cover;
    backdrop-filter: blur(5px); /* Agrega un ligero desenfoque al fondo */
    background-color: rgba(255, 255, 255, 0.3);
  }

  .diseños-rutas1,
  .diseños-rutas2,
  .diseños-rutas3 {
    text-align: center;
    height: 50%;
    width:50%;
    padding: 10px;
    margin: 15px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
  }

  .diseños-rutas1 {
    margin-top: 10px; /* Ajustamos el margen superior */
  }

  .diseños-rutas2 {
    margin-top: 10px; /* Ajustamos el margen superior */
  }

  .diseños-rutas3 {
    margin-top: 10px; /* Ajustamos el margen superior */
  }
}
