import React, { useState } from 'react';
import SextingSessionModal from './SextingSessionModal';
import MeetUpModal from './MeetUpModal';
import TipModal from './TipModal';
import styles from '../styles/components.module.css';

const OffersModal = ({ onClose }) => {
  const [serviceModal, setServiceModal] = useState(null);

  const openServiceModal = (service) => {
    setServiceModal(service);
  };

  const closeServiceModal = () => {
    setServiceModal(null);
  };

  if (serviceModal) {
    if (serviceModal === 'sexting') return <SextingSessionModal onClose={closeServiceModal} />;
    if (serviceModal === 'meetup') return <MeetUpModal onClose={closeServiceModal} />;
    if (serviceModal === 'tip') return <TipModal onClose={closeServiceModal} />;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.offersModal} style={{ top: '50%', transform: 'translateY(-50%)' }}>
        <span className={styles.close} onClick={onClose}>×</span>
        <div className={styles.offersList}>
          <button onClick={() => openServiceModal('sexting')}>Sexting Session</button>
          <button onClick={() => openServiceModal('meetup')}>Meet Ups</button>
          <button onClick={() => openServiceModal('tip')}>Tip Me ♡</button>
        </div>
      </div>
    </div>
  );
};

export default OffersModal;