import React, { useState } from 'react';
import styles from '../Navbar/navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
      <ul className={`${styles.navbarLinks} ${isOpen ? styles.showNav : ''}`}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#precios">Precios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
