import React, { useState } from 'react';
import PaymentForm from './PaymentForm';
import styles from '../styles/components.module.css';

const SextingSessionModal = ({ onClose }) => {
  const [hours, setHours] = useState(2);
  const price = 5 + (Math.max(hours - 2, 0) * 0.99);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>×</span>
        <h2>Sexting Session</h2>
        <p>Choose the duration of your session:</p>
        <input 
          type="number" 
          value={hours} 
          onChange={(e) => setHours(parseInt(e.target.value) || 2)} 
          min="2"
          className={styles.input}
        /> hours
        <p>Total: ${price.toFixed(2)}</p>
        <PaymentForm onClose={onClose} amount={price} service="Sexting Session" onPayment={() => onClose()} />
      </div>
    </div>
  );
};

export default SextingSessionModal;