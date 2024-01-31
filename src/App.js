import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CartPage from './Cart';
import Login from './Login';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";


function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <Router>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home setSelectedProducts={setSelectedProducts} />} />
        <Route path="/login" element={<Login />} />

        <Route path="/cart" element={<CartPage selectedProducts={selectedProducts} />} />
      </Routes>
    </Router>
  );
}

export default App;



