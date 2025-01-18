import React, { useState } from 'react';
import PaymentForm from './PaymentForm';
import styles from '../styles/components.module.css';

const TipModal = ({ onClose }) => {
  const [amount, setAmount] = useState('');

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>×</span>
        <h2>Tip Me ♡</h2>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Enter tip amount" 
          className={styles.input}
          required
        />
        <PaymentForm onClose={onClose} amount={parseFloat(amount) || 0} service="Tip" onPayment={() => onClose()} />
      </div>
    </div>
  );
};

export default TipModal;