import React, { useState } from 'react';
import styles from '../Navbar/navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <h1>Logo</h1>
      <button className={styles.toggleButton} onClick={handleToggle}>
        <span className={styles.toggleIcon}></span>
      </button>
      <ul className={`${styles.navbarLinks} ${isOpen ? styles.showNav : ''}`}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


