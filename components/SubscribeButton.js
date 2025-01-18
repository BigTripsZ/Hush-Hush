import React from 'react';
import styles from '../styles/components.module.css';

const SubscribeButton = ({ onClick, showPopup, price }) => (
  <button 
    className={`${styles.subscribeButton} ${showPopup ? styles.showPopup : ''}`} 
    onClick={onClick}
  >
    <span className={styles.heartIcon}></span>
    Subscribe for ${price}
  </button>
);

export default SubscribeButton;