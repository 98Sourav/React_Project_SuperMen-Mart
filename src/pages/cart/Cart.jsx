import { useEffect, useState } from 'react';
import '../../shared/styles/Cart.css'; // Make sure this exists or adjust path

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const updateCart = (items) => {
    localStorage.setItem('cart', JSON.stringify(items));
    setCartItems(items);
    window.dispatchEvent(new Event('cartUpdated')); // Notify header to update count
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    updateCart(updatedCart);
  };

  return (
    <div className="main-content">
    <div className="cart-container">
      <h2>🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-grid">
          {cartItems.map((item, index) => (
            <div className="cart-card" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>₹{item.discounted || item.original || 'N/A'}</p>
              <button onClick={() => removeFromCart(index)}>🗑️ Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Cart;
