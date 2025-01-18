import Head from 'next/head';
import { useState, useEffect } from 'react';
import Profile from '../components/Profile';
import MediaGallery from '../components/MediaGallery';
import SubscribeButton from '../components/SubscribeButton';
import LoadingAnimation from '../components/LoadingAnimation';
import TopRightIcon from '../components/TopRightIcon';
import styles from '../styles/components.module.css';

export default function Home() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showSubscribePopup, setShowSubscribePopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const media28 = document.getElementById('media-28');
      if (media28 && window.scrollY > media28.offsetTop - window.innerHeight && !isSubscribed) {
        setShowSubscribePopup(true);
        window.scrollTo(0, media28.offsetTop - window.innerHeight);
      } else if (window.scrollY < media28.offsetTop - window.innerHeight) {
        setShowSubscribePopup(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSubscribed]);

  const handleSubscribe = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
    }, 2000); // Simulate payment processing
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Hush-Hush</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <TopRightIcon />
        <Profile />
        <MediaGallery isSubscribed={isSubscribed} />
        {!isSubscribed && (
          <SubscribeButton 
            onClick={handleSubscribe}
            showPopup={showSubscribePopup}
            price={9.99}
          />
        )}
        {isLoading && <LoadingAnimation />}
      </main>
    </div>
  );
}