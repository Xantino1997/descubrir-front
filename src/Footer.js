/* Estilos del footer para la vista de escritorio (PC) */
.footer {
  background-color: #225;
  color: #fff;
  padding: 40px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  background-image: url('../assets/header.jpg'); /* Ruta a tu archivo SVG */
}

.columna {
  flex: 1;
  margin-right: 20px;
  text-align: center;
}

.columna:last-child {
  margin-right: 0;
}

.form-footer {
  display: flex;
  text-align: center;
  margin-top: 30px;
}

.form-footer input {
  text-align: center;
}

h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 5px;
}

a {
  text-decoration: none;
  color: #fff;
}

a:hover {
  text-decoration: underline;
}

.columna form {
  display: flex;
  flex-direction: column;
}

.columna input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.columna button {
  padding: 10px;
  background-color: #fc2003;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.columna button:hover {
  background-color: #d60b00;
}

.redes-sociales {
  width: 30px;
  border-radius: 25px;
  margin-right: 5px;


}

.copyright {
  width: 100%;
  text-align: center;
  background-color: #111;
  color: #fff;
  padding-top: 10px;
}
.terminos {
  color: #000;
}
/* Estilos del footer para la vista de dispositivos móviles (celulares) */
@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-image: url("../assets/header.jpg"); /* Ruta a tu archivo SVG */
  }
  a {
    text-decoration: none;
    color:red ;
    font-weight: bold ;
  }
  .columna {
    margin-right: 0;
    margin-bottom: 20px;

  }

  .form-footer {
    flex-direction: column;
    align-items: center;
  }

  .columna form {
    align-items: center;
  }
}
