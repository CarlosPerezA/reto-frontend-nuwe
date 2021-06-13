import React from 'react';
import styles from '../assets/styles/Menu/menu.module.scss';

const Menu = ({ children, title, subtitle}) => (
    <div className={styles.container}>
        <div className={styles.menu__option}/>
        <div className={styles.menu__container}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
        {children}
    </div>
);

export default Menu;