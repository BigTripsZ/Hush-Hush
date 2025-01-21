import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/ProfilePage.module.css';
import { BsFillLockFill } from 'react-icons/bs';
import LoadingSpinner from './LoadingSpinner';
import SubscriptionModal from './SubscriptionModal';

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userLocation, setUserLocation] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Fetch user location
    fetch('https://ipwhois.app/json/')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setUserLocation(`${data.city}, ${data.country}`);
        } else {
          setUserLocation('Location Unknown');
        }
      })
      .catch(error => {
        console.error('Error fetching location:', error);
        setUserLocation('Location Fetch Failed');
      });
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubscription = async (paymentDetails) => {
    // Here you would typically process or validate payment details if needed
    // For this example, we'll just redirect to BitHide
    window.location.href = 'https://your-bithide-payment-page-url.com'; // Replace with actual BitHide payment URL
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Hush-Fans Profile</title>
        <meta name="description" content="Profile page for Hush-Fans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.banner}>
          <Image 
            src="/banner.jpg" 
            alt="Banner Image" 
            layout="fill" 
            objectFit="cover" 
            className={styles.bannerImage}
          />
          <div className={styles.profilePicture}>
            <Image 
              src="/profile.jpg" 
              alt="Profile Picture" 
              width={150} 
              height={150} 
              className={styles.circularImage}
            />
          </div>
        </div>
        <div className={styles.userInfo}>
          <h1 className={styles.userName}>YourDreamSlut</h1>
          <p className={styles.userHandle}>@YourDreamSlut</p>
          <p className={styles.location}>𖤣ᨒ {userLocation || 'Loading...'}</p>
        </div>
        <p className={styles.bio}>
          Step into my world where fantasy becomes reality. With a whisper of mystery and a touch of allure, I invite you into my exclusive corner of desire. Let's explore the depths of passion together, where every secret is safe and every fantasy is indulged. Are you ready to unlock the adventure?
        </p>
      </header>

      <section className={styles.subscription}>
        <div className={styles.stats}>
          <p>Posts: <span>123</span></p>
          <p>Media Items: <span>456</span></p>
        </div>
        <div className={styles.subscriptionButtons}>
          <button className={`${styles.subscribeButton} ${styles.free}`} onClick={openModal}>SUBSCRIBE FOR FREE</button>
          <button className={`${styles.subscribeButton} ${styles.paid}`} onClick={openModal}>SUBSCRIBE TO SEE USER'S POSTS</button>
        </div>
      </section>

      <main className={styles.mainContent}>
        <div className={styles.protectedPost}>
          <Image 
            src="/blurred-image.jpg" 
            alt="Protected Content"
            layout="responsive"
            width={300}
            height={200}
            className={styles.blurredImage}
          />
          <BsFillLockFill className={styles.lockIcon} />
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.navIcons}>
          <button className={styles.navButton}><span role="img" aria-label="Home">🏠</span></button>
          <button className={styles.navButton}><span role="img" aria-label="Posts">📝</span></button>
          <button className={styles.navButton}><span role="img" aria-label="Settings">⚙️</span></button>
        </div>
      </footer>

      {showModal && <SubscriptionModal onClose={closeModal} onSubmit={handleSubscription} />}
    </div>
  );
};

export default ProfilePage;