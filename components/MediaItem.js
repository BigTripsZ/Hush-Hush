import React from 'react';
import styles from '../styles/components.module.css';

const MediaItem = ({ media, caption, isSubscribed, id }) => (
  <div className={`${styles.mediaItem} ${!isSubscribed ? styles.blurred : ''}`} id={id}>
    <img src={media} alt={caption} className={styles.mediaImage} />
    <p className={styles.mediaCaption}>{caption}</p>
  </div>
);

export default MediaItem;