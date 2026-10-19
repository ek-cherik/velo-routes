import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">HORIZONT</div>
        <nav className="footer-nav">
          <Link to="/">О нас</Link>
          <a href="/#routes">Маршруты</a>
          <a href="/#journal">Журнал</a>
          <Link to="/contacts">Связаться</Link>
        </nav>
        <div className="footer-social">
          <span>© 2026 HORIZONT</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
