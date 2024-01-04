import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={`navbar ${menuOpen && 'open'}`}>
      <a href='/' className='logo'>
        <img src='Logo.svg' alt='logo' />
      </a>

      <div className='menu-icon' onClick={toggleMenu}>
        <img src='hamburger-menu.svg' alt='burger button' />
      </div>

      <ul className={`nav-links ${menuOpen && 'visible'}`}>
        <li>
          <a href='/'>HOME</a>
        </li>
        <li>
          <a href='/'>ABOUT</a>
        </li>
        <li>
          <a href='/'>MENU</a>
        </li>
        <li>
          <a href='/'>RESERVATIONS</a>
        </li>
        <li>
          <a href='/'>ORDER ONLINE</a>
        </li>
        <li className='nav-link-login'>
          <a href='/'>LOGIN</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
