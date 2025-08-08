import { useEffect, useState } from 'react';
import '../../shared/styles/Whishlist.css';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favourites')) || [];
    setWishlistItems(stored);
  }, []);

const updateLocalStorage = (items) => {
  localStorage.setItem('favourites', JSON.stringify(items));
  setWishlistItems(items);

  // Dispatch custom event so header can listen
  window.dispatchEvent(new Event('wishlistUpdated'));
};

const removeFromWishlist = (index) => {
  const updated = [...wishlistItems];
  updated.splice(index, 1);
  updateLocalStorage(updated);
};

const moveToCart = (index) => {
  const item = wishlistItems[index];
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('cartUpdated')); // 🔥 Notify cart update

  removeFromWishlist(index);

  alert('Moved to cart!');
};


  return (
    <div className="wishlist-container">
      <h2>❤️ My Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="empty">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((item, index) => (
            <div className="wishlist-card" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              {item.original && <p>₹{item.discounted}</p>}

              <div className="wishlist-buttons">
                <button onClick={() => moveToCart(index)}>🛒 Move to Cart</button>
                <button onClick={() => removeFromWishlist(index)}>🗑️ Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
