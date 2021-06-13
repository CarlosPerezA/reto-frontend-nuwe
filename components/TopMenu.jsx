import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/TopMenu/topMenu.module.scss";

const TopMenu = ({ step, label, link }) => {
  return (
    <div className={styles.topMenu}>
      <div className={styles.topMenu__goback}>
        <Link to={link} style={{ textDecoration: "none" }}>
          <p>Volver</p>
        </Link>
      </div>
      <div className={styles.topMenu__label}>
        <p>{step}</p>
        <h3>{label}</h3>
      </div>
    </div>
  );
};

export default TopMenu;
