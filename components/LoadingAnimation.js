import React from 'react';
import styles from '../styles/components.module.css';

const LoadingAnimation = () => (
  <div className={styles.loading}>
    <img src="/images/loading-image.gif" alt="Loading" className={styles.loadingImage} />
  </div>
);

export default LoadingAnimation;