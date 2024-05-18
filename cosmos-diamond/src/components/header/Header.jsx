// src/components/Header.jsx
// import React from 'react';
import './Header.css';
import img from '../../assets/logo.png'
import {
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  DownOutlined
} from '@ant-design/icons';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
      <img src={img} alt="Cosmos Diamonds" />
      </div>
      <nav className="nav">
        <a className="nav-link" href="#">Diamonds  <DownOutlined style={{ fontSize: '10px', marginLeft: '3px' }}/>  </a>
        <a className="nav-link" href="#">Engagement Rings  <DownOutlined style={{ fontSize: '10px', marginLeft: '3px' }}/>  </a>
        <a className="nav-link" href="#">Wedding Rings  <DownOutlined style={{ fontSize: '10px', marginLeft: '3px' }}/>  </a>
        <a className="nav-link" href="#">Fashion Rings  <DownOutlined style={{ fontSize: '10px', marginLeft: '3px' }}/>  </a>
        <a className="nav-link" href="#">Education  <DownOutlined style={{ fontSize: '10px', marginLeft: '3px' }}/>  </a>
      </nav>
      <div className="search-bar">
        <input className="search-input" type="text" placeholder="Search" />
        <SearchOutlined />
      </div>
      <div className="icon-container">
        <div className="icon"><UserOutlined /></div>
        <div className="icon"><HeartOutlined /></div>
        <div className="icon"><ShoppingCartOutlined /></div>
      </div>
    </header>
  );
};

export default Header;
