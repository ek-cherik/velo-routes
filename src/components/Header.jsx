import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">HORIZONT</Link>
        </div>
        <button className="burger-btn" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            О нас
          </Link>
          <a href="#routes" onClick={() => setIsOpen(false)}>
            Маршруты
          </a>
          <a href="#journal" onClick={() => setIsOpen(false)}>
            Журнал
          </a>
          <Link to="/contacts" onClick={() => setIsOpen(false)}>
            Связаться
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
