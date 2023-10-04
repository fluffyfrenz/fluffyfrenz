// components/Header.tsx
import React from 'react';
import NavBar from '../NavBar/NavBar';
import './header.module.css';

const Header: React.FC = () => {
  return (
    <header>
      <NavBar />
    </header>
  );
};

export default Header;
