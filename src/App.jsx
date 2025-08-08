import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Shared Layout Components
import Header from './shared/layout/Header';
import Footer from './shared/layout/Footer';

// Pages
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Wishlist from './pages/Whishlist/Whishlist';
import Cart from './pages/cart/Cart';

const App=()=> {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer />

    </Router>
  
  );
}

export default App;
