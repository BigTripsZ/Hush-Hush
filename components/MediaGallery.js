import React from 'react';
import styles from '../styles/components.module.css';

const MediaGallery = ({ isSubscribed }) => (
  <div className={styles.gallery}>
    {[...Array(30)].map((_, i) => (
      <img 
        key={i} 
        src={`/images/media${i + 1}.jpg`} 
        alt={`Media ${i + 1}`} 
        className={`${styles.mediaItem} ${!isSubscribed ? styles.blurred : ''}`}
        id={i === 27 ? 'media-28' : undefined}
      />
    ))}
  </div>
);

export default MediaGallery;