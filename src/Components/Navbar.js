import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className={style.navContainer}>
      <nav className={style.nav}>
        <Link to='/' className={style.navLink}>About Me</Link>
        <Link to='/projects' className={style.navLink}>Projects</Link>
        <Link to='/journey' className={style.navLink}>My Journey</Link>
        <Link to='/contact' className={style.navLink}>Contact</Link>
      </nav>
    </div>
  );
}
