import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../images/logo.png'; // Adjust path as needed

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="header__nav">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/profil">Profil</Link></li>
          <li><Link to="/reglages">Réglages</Link></li>
          <li><Link to="/communaute">Communauté</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
