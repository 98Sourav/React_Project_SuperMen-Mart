import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div>
        <h3>Quick Links</h3>
        <a href="#">Home</a><br />
        <a href="#">Shop</a><br />
        <a href="#">Contact</a>
      </div>
      <div>
        <h3>Support</h3>
        <a href="#">FAQ</a><br />
        <a href="#">Returns</a><br />
        <a href="#">Privacy Policy</a>
      </div>
      <div>
        <h3>Contact</h3>
        <a href="#">Contact: (011)-4566789677</a><br />
        <a href="#">Email: supermenmart@gmail.com</a>
      </div>
      <div className="follow">
        <h3>Follow Us</h3>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>

    <div className="footer-newsletter">
      <h3>Subscribe to our Newsletter</h3><br />
      <form className="newsletter-form" onSubmit={(e) => {
        e.preventDefault();
        document.getElementById('loader-overlay').style.display = 'flex';
        setTimeout(() => {
          document.getElementById('loader-overlay').style.display = 'none';
          alert('Thanks for subscribing!');
        }, 2000);
      }}>
        <input
          type="email"
          placeholder="Your email address"
          required
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        />
        <button type="submit" id="news-submit">Subscribe</button>
        <div id="loader-overlay" style={{ display: 'none' }}>
          <div className="spinner"></div>
        </div>
      </form>
    </div>

    <div className="footer-text">
      &copy; 2025 SuperMenMart. All rights reserved.
    </div>
  </footer>
);

export default Footer;
