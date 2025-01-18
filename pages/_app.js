import '../styles/globals.css'
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [showOffers, setShowOffers] = useState(false);

  const handleShowOffers = () => {
    setShowOffers(!showOffers);
  };

  return <Component {...pageProps} showOffers={showOffers} handleShowOffers={handleShowOffers} />
}

export default MyApp;