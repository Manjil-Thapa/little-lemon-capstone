import { useState } from 'react';

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleMenu = () => {
    setOpenNav(!openNav);
  };
  return (
    <nav className={`navbar ${openNav && 'open'}`}>
      <a href='/' className='logo'>
        <img src='Logo.jpg' alt='restaurant logo' />
      </a>

      <div className='burger-icon' onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

      <ul className={`nav-links ${openNav && 'nav-active'}`}>
        <li>
          <a href='/'>HOME</a>S
        </li>
        <li>
          <a href='/'>ABOUT</a>
        </li>
        <li>
          <a href='/'>MENU</a>
        </li>
        <li>
          <a href='/'>RESEVATIONS</a>
        </li>
        <li>
          <a href='/'>ORDER ONLINE</a>
        </li>
        <li>
          <a href='/'>LOGIN</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
