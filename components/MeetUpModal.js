import React, { useState, useEffect } from 'react';
import PaymentForm from './PaymentForm';
import styles from '../styles/components.module.css';

const MeetUpModal = ({ onClose }) => {
  const [userLocation, setUserLocation] = useState('');
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    fetch('https://ipwhois.app/json/')
      .then(response => response.json())
      .then(data => setUserLocation(`${data.city}, ${data.country}`))
      .catch(error => console.error('Error fetching location:', error));
  }, []);

  const handleServiceSelection = (service, amount) => {
    setSelectedService({ service, amount });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>×</span>
        <h2>Meet Up Services</h2>
        <p>YourDreamSlut is nearby: <span className={styles.locationFeature}>𖤣ᨒ {userLocation || 'Loading...'}</span></p>
        {!selectedService && (
          <div className={styles.serviceList}>
            <p><strong>Incall:</strong> $100 - I come to you</p>
            <button onClick={() => handleServiceSelection('Incall Meet Up', 100)}>Book Incall</button>
            <p><strong>Outcall:</strong> $150 - You come to me</p>
            <button onClick={() => handleServiceSelection('Outcall Meet Up', 150)}>Book Outcall</button>
          </div>
        )}
        {selectedService && (
          <PaymentForm 
            onClose={onClose} 
            amount={selectedService.amount} 
            service={selectedService.service} 
            onPayment={() => onClose()}
          />
        )}
        <p className={styles.disclaimer}>Safety first: Always meet in public, inform someone of your plans, and ensure mutual comfort and consent.</p>
      </div>
    </div>
  );
};

export default MeetUpModal;