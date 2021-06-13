import React from 'react';
import styles from '../assets/styles/Layout/layout.module.scss';

const Layout = ({ children }) => (
    <div className ={styles.container}>
        <aside>
            <div className={styles.background}/>
                <div className={styles.background__text}>
                    <p className={styles.background__text__p}>
                        Nuwe es la plataforma que convierte el desarrollo profesional, la busqueda de trabajo
                        y las conexiones de personas y empresas es un juego. Haciendo que puedas 
                        centrarte en lo que te gusta, programar, diseñar, crear, planear...
                    </p>
                </div>
        </aside>
        <section className={styles.menu}>
            {children}
        </section>
    </div>
);

export default Layout