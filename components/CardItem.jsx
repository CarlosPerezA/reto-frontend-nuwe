import React from 'react';
import styles from '../assets/styles/Card/cardItem.module.scss';

const CardItem = ({title, description}) => (
    <div className={styles.cardItem}>
        
        <div className={styles.cardItem__details}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
);

export default CardItem;