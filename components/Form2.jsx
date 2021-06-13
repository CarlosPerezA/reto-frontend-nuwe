import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/Form/form.module.scss";

const Form2 = () => {
  return (
    <div className={styles.form}>
      <div className={styles.form__container}>
        <form className={styles.form__container__wrap}>
          <p>Numero de télefono</p>
          <input
            name="telephone"
            className={styles.input}
            type="number"
            placeholder="Phone number"
          />
          <p>Dirección</p>
          <input
            name="address"
            className={styles.input}
            type="text"
            placeholder="Enter email address"
          />
          <p>País de residencia</p>
          <input
            name="country"
            className="input"
            type=""
            placeholder="Enter password"
          />
         <Link to="/verify">
          <button className={styles.button} type="submit">
            Guardar y continuar
          </button></Link>
        </form>
        <p>Tu informacion es segura</p>
      </div>
    </div>
  );
};

export default Form2;
