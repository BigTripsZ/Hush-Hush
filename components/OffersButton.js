import React from 'react';
import styles from '../styles/components.module.css';

const OffersButton = ({ onClick, showPopup }) => (
  <button 
    className={`${styles.offersButton} ${showPopup ? styles.showPopup : ''}`}
    onClick={onClick}
  >
    My Offers
  </button>
);

export default OffersButton;