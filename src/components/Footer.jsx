// src/components/Footer.jsx

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h2 className="footer-logo">ShopHub</h2>
          <p className="footer-text">
            Your one-stop shop for amazing products at great prices.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/checkout">Cart</Link>
          <Link to="/auth">Account</Link>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@shophub.com</p>
          <p>Phone: +234 812 168 5344</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ShopHub. All rights reserved.</p>
      </div>
    </footer>
  );
}