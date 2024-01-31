import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

function HomePage() {
  const products = [
    { id: 1, image: "/x9.jpg", name: "Elite Premium Whey Protein", price: 50 },
    { id: 2, image: "/x10.jpg", name: "Love Merchandise", price: 50 },
    { id: 3, image: "/x11.jpg", name: "Football Tackling Dummy – Goalrilla", price: 60 },
    { id: 4, image: "/x7.jpg", name: "High-quality dummy “HAYASHI” ", price: 50 },
    { id: 5, image: "/x5.jpeg", name: "Football Trainer", price: 5 },
    { id: 6, image: "/x6.jpeg", name: "Judo Training", price: 500 }
  ];

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // Navigate to the cart page
    window.location.href = "/cart";
  };

  return (
    <div>
      <Header />
      <div className="container mt-5 mb-5 pb-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row justify-content-center">
          {products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={product.image} alt={product.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price.toFixed(2)}</p>
                  <button className="btn btn-primary btn-block" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;



