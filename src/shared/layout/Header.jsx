import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../components/DarkModeContext'; // make sure this path is correct

const Header = () => {
  const [username, setUsername] = useState('');
  const [favouritesCount, setFavouritesCount] = useState(null);
  const [cartCount, setCartCount] = useState(null);

  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUsername(user.split('@')[0]);
    }

    const favItems = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavouritesCount(favItems.length || null);

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cartItems.length || null);
  }, []);

  useEffect(() => {
    const updateCounts = () => {
      const favItems = JSON.parse(localStorage.getItem('favourites')) || [];
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      setFavouritesCount(favItems.length || null);
      setCartCount(cartItems.length || null);
    };

    window.addEventListener('wishlistUpdated', updateCounts);
    window.addEventListener('cartUpdated', updateCounts);
    window.addEventListener('storage', updateCounts);

    return () => {
      window.removeEventListener('wishlistUpdated', updateCounts);
      window.removeEventListener('cartUpdated', updateCounts);
      window.removeEventListener('storage', updateCounts);
    };
  }, []);

const toggleMenu = () => {
  const menu = document.getElementById("menu"); // actual menu
  const toggleIcon = document.querySelector(".menu-toggle"); // the ☰ icon

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
};

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/images/logo_new.png" alt="Logo" className="logo-img" />
        SuperMenMart
      </Link>
      <span className="menu-toggle" id="toggle" onClick={toggleMenu}>&#9776;</span>

      <ul className="nav-menu" id="menu">
        <li><Link to="/"> Home</Link></li>

        {username ? (
          <>
            <li><a href="#">Welcome, <strong>{username}</strong></a></li>
            <li><Link to="/logout"> Logout</Link></li>
          </>
        ) : (
          <li><Link to="/register"> Login</Link></li>
        )}

        <li className="dropdown">
          <a href="#product-list" className="dropbtn"> Products</a>
          <div className="dropdown-content">
            <a href="#">Shirts</a>
            <a href="#">T-Shirts</a>
            <a href="#">Jeans</a>
            <a href="#">Trousers</a>
            <a href="#">Jackets</a>
            <a href="#">Shoes</a>
            <a href="#">Watches</a>
            <a href="#">Accessories</a>

          </div>
        </li>

        <li><Link to="/about"> About Us</Link></li>
        <li><Link to="/contact"> Contact</Link></li>

        <li>
          <Link to="/cart">
            <i className="fa-solid fa-shopping-cart" ></i>
            {cartCount !== null && <sup  id="fav" className="cart-count">{cartCount}</sup>}
          </Link>
        </li>

        <li>
          <Link to="/wishlist">
            <i className="fa-solid fa-heart"></i>
            {favouritesCount !== null && <sup className="fav">{favouritesCount}</sup>}
          </Link>
        </li>

        <li>
          <button
            onClick={toggleDarkMode}
            style={{ background: 'none', border: 'none', cursor: 'pointer', marginTop: '6px' , marginRight:'6px' }}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >

            <i
                className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'}`}
                style={{
                    
                    fontSize: '22px',
                    color: 'white'
                }}
            ></i>

          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
