import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/Form/form.module.scss";

const Form3 = () => {
  return (
    <div className={styles.form}>
      <div className={styles.form__container}>
        <form className={styles.form__container__wrap}>
          <p>Numero de tarjeta</p>
          <input
            name="card"
            className={styles.input}
            type="number"
            placeholder="xxxx-xxxx-xxxx-xxxx"
          />
          <p>Código secreto</p>
          <input
            name="cvv"
            className={styles.input}
            type="text"
            placeholder="cvv"
          />
          <button className={styles.button} type="submit">
            Crear cuenta
          </button>
        </form>
        <p>Tu informacion es segura</p>
      </div>
    </div>
  );
};

export default Form3;
