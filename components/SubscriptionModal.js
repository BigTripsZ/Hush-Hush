import React, { useState } from 'react';
import styles from '../styles/SubscriptionModal.module.css';

const SubscriptionForm = ({ onClose, onSubmit }) => {
  const [amount, setAmount] = useState(10); // Default amount, adjust as needed
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here we would typically validate payment details, but we're simulating
    onSubmit({ amount: amount });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Subscribe</h2>
      <p>Subscribe and get these benefits:</p>
      <ul>
        <li>Full access to this user's content</li>
        <li>Direct message with this user</li>
        <li>Cancel your subscription at any time</li>
      </ul>
      <div>
        <label htmlFor="amount">Amount ($):</label>
        <input 
          type="number" 
          id="amount" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          min="1" 
          step="0.01" 
          required 
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Proceed to Payment
      </button>
      {error && <p className={styles.error}>{error}</p>}
      <button type="button" onClick={onClose} className={styles.closeButton}>Close</button>
    </form>
  );
};

const SubscriptionModal = ({ onClose, onSubmit }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <SubscriptionForm onClose={onClose} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default SubscriptionModal;