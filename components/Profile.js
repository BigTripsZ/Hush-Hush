import React from 'react';
import styles from '../styles/components.module.css';

const Profile = () => (
  <div className={styles.profile}>
    <img src="/images/profile.jpg" alt="Hush-Hush" className={styles.profileImage} />
    <h1 className={styles.profileName}>Hush-Hush</h1>
  </div>
);

export default Profile;