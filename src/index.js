import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from './cartSlice';

// Configure Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer
    // Add other reducers here if needed
  },
  // Add middleware if needed
});

// Render the App wrapped in the Provider
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Measure and report web vitals (optional)
reportWebVitals();


