import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function App() {
  // Load any previously saved cart so it survives page refreshes / direct links.
const [cartItems, setCartItems] = useState(() => {
  try {
    const saved = localStorage.getItem('evora-cart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
});

// Persist the cart whenever it changes.
useEffect(() => {
  try {
    localStorage.setItem('evora-cart', JSON.stringify(cartItems));
  } catch {
    /* ignore storage errors (e.g. private mode / quota) */
  }
}, [cartItems]);

// Total number of units across all line items (for the navbar badge).
const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

const updateQuantity = (id, quantity, color, size) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id &&
      item.color === color &&
      item.size === size
        ? { ...item, quantity: Math.max(1, quantity) }
        : item
    )
  );
};

const removeItem = (id, color, size) => {
  setCartItems((prev) =>
    prev.filter(
      (item) =>
        !(item.id === id && item.color === color && item.size === size)
    )
  );
};





  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar cartCount={cartCount} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />




            {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
         <Route
  path="/product/:id"
  element={
    <ProductDetail
      cartItems={cartItems}
      setCartItems={setCartItems}
    />
  }
/>

<Route
  path="/cart"
  element={
    <Cart
      cartItems={cartItems}
      updateQuantity={updateQuantity}
      removeItem={removeItem}
    />
  }
/>
            
            
            
            
            {/* <Route path="/cart" element={<Cart/>} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;