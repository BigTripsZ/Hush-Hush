import React, { useState } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import styles from '../styles/components.module.css';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PaymentForm = ({ onClose, amount, service, onPayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
    } else {
      // Simulate payment process since we don't have server-side processing
      setTimeout(() => {
        const message = encodeURIComponent(`I paid for ${service}.`);
        const telegramUrl = `https://t.me/hush_sluts?start=${message}`;
        window.location.href = telegramUrl;
        onPayment({ type: service, amount: amount });
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.paymentForm}>
      <div>
        <label htmlFor="cardElement">Card details</label>
        <CardElement />
      </div>
      {error && <div className={styles.error}>{error}</div>}
      <button type="submit" disabled={!stripe}>
        Confirm & Pay ${amount.toFixed(2)}
      </button>
    </form>
  );
};

const StripeWrapper = ({ children, amount, service, onPayment }) => (
  <Elements stripe={stripePromise}>
    {React.cloneElement(children, { amount, service, onPayment })}
  </Elements>
);

export default StripeWrapper(PaymentForm);