// Checkout.js
import React from 'react';

function Checkout({ handlePayment }) {
  return (
    <div>
      <h2>Checkout</h2>
      <p>Choose your payment method:</p>
      <button onClick={() => handlePayment('credit')}>Credit Card</button>
      <button onClick={() => handlePayment('paypal')}>PayPal</button>
    </div>
  );
}

export default Checkout;
