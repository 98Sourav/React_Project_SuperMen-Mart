import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ image, title, rating, discounted, original, onAdd }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favItems = JSON.parse(localStorage.getItem('favourites')) || [];
    setIsFav(favItems.some(item => item.title === title));
  }, [title]);

  const handleFav = () => {
    const favItems = JSON.parse(localStorage.getItem('favourites')) || [];
    const exists = favItems.find(item => item.title === title);

    let updated;
    if (exists) {
      updated = favItems.filter(item => item.title !== title);
      setIsFav(false);
    } else {
      updated = [...favItems, { image, title, rating, discounted, original }];
      setIsFav(true);
    }

    localStorage.setItem('favourites', JSON.stringify(updated));
    window.dispatchEvent(new Event('storage')); // To trigger update in Header
  };

  const handleAddToCart = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ image, title, rating, discounted, original });
  localStorage.setItem('cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('cartUpdated'));
  onAdd(); // still call the parent function for any extra action
};


  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <h3 className="product-title">{title}</h3>
      <p className="ratings">{rating}</p>
      <p className="discounted ">
        ₹{discounted}{' '}
        <span className="original">₹{original}</span>
      </p>
     <button className="add-cart-btn" onClick={handleAddToCart}>
        <i className="fa-solid fa-shopping-cart" style={{ marginRight: '8px' }}></i>
        Add to Cart
      </button>

      <button className="fav-btn" onClick={handleFav}>
        {isFav ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  discounted: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  original: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ProductCard;
