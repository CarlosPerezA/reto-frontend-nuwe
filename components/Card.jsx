import React from 'react';
import styles from '../assets/styles/Card/card.module.scss';

const Card = ({ children }) => (
    <div className={styles.card}>
        <div className={styles.card__container}>
            {children}
        </div>
    </div>
);

export default Card;