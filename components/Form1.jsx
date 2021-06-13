import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/Form/form.module.scss";

const Form1 = () => {
  return (
    <div className={styles.form}>
      <div className={styles.form__container}>
        <form className={styles.form__container__wrap}>
          <p>Nombre completo</p>
          <input
            name="fullName"
            className={styles.input}
            type="text"
            placeholder="Enter your full name"
          />
          <p>Correo electrónico</p>
          <input
            name="email"
            className={styles.input}
            type="email"
            placeholder="Enter email address"
          />
          <p>Contraseña</p>
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Enter password"
          />
          <div className={styles.form__container__accept}>
          <input type="checkbox" id="cbox1" value="first_checkbox" />
            <label htmlFor="first_checkbox">
                Acepto los términos y condiciones
            </label>
          </div>
          <Link to="/profile">
          <button className={styles.button} type="submit">
            Registrar cuenta
          </button></Link>
        </form>
        <button className={styles.button__google} type="button">
            Registrate con Google
          </button>
      </div>
    </div>
  );
};

export default Form1;
