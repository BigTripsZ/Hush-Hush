import Head from 'next/head';
import { useState, useEffect } from 'react';
import Profile from '../components/Profile';
import MediaItem from '../components/MediaItem';
import OffersButton from '../components/OffersButton';
import OffersModal from '../components/OffersModal';
import LoadingAnimation from '../components/LoadingAnimation';
import TopRightIcon from '../components/TopRightIcon';
import styles from '../styles/components.module.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [showOffers, setShowOffers] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const media9 = document.getElementById('media-9');
      if (media9 && window.scrollY > media9.offsetTop - window.innerHeight / 2) {
        setShowOffers(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShowOffers = () => {
    setShowOffers(!showOffers);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Hush-Hush</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className={styles.header}>
        <h1>Welcome to Hush-Hush</h1>
        <TopRightIcon />
      </header>
      
      <main className={styles.main}>
        <Profile />
        <div className={styles.mediaList}>
          {[...Array(11)].map((_, i) => (
            <MediaItem 
              key={i} 
              media={`/images/media${i + 1}.jpg`} 
              caption={`Sexy Caption ${i + 1}`} 
              isSubscribed={true}
              id={i === 8 ? 'media-9' : undefined}
            />
          ))}
        </div>
        <OffersButton onClick={handleShowOffers} showPopup={showOffers} />
        {isLoading && <LoadingAnimation />}
      </main>
      
      <footer className={styles.footer}>
        <p>© 2023 Hush-Hush. All Rights Reserved.</p>
      </footer>
      
      {showOffers && <OffersModal onClose={handleShowOffers} />}
    </div>
  );
}