import React from "react";
import { Link } from 'react-router-dom';
import styles from "../assets/styles/TopMenu/inicioSesion.module.scss";

const inicioSesion = () => {
  return (
    <div className={styles.inicioSesion}>
      <Link to="/" style={{ textDecoration: 'none' }}><p className={styles.inicioSesion__link}>Inicia sesión</p></Link>
      <p>Ya tienes cuenta?</p>
    </div>
  );
};

export default inicioSesion;
