// src/components/Header.jsx
// import React from 'react';
import './Header.css';
import img1 from '../../assets/logo.png'

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <img src={img1} style={{width:'30%'}}/>
      </div>
      <nav className="nav">
        <a className="nav-link" href="#">Diamonds</a>
        <a className="nav-link" href="#">Engagement Rings</a>
        <a className="nav-link" href="#">Wedding Rings</a>
        <a className="nav-link" href="#">Jewelry</a>
        <a className="nav-link" href="#">Gifts</a>
        <a className="nav-link" href="#">Gemstones</a>
        <a className="nav-link" href="#">Education</a>
      </nav>
      <div className="search-bar">
        <input className="search-input" type="text" placeholder="Search" />
      </div>
      <div className="icon-container">
        <div className="icon">👤</div>
        <div className="icon">❤️</div>
        <div className="icon">🛒</div>
      </div>
    </header>
  );
};

export default Header;
