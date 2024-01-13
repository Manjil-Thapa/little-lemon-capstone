import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headElement = headRef.current;
      if (!headElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headElement.style.transform = 'translateY(0)';
      } else {
        headElement.style.transform = 'translateY(-100%)';
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen && 'open'}`} ref={headRef}>
      <Link to='/' className='logo'>
        <img src='Logo.svg' alt='logo' />
      </Link>

      <div className='menu-icon' onClick={toggleMenu}>
        <img src='hamburger-menu.svg' alt='burger button' />
      </div>

      <ul className={`nav-links ${menuOpen && 'visible'}`}>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/about'>ABOUT</Link>
        </li>
        <li>
          <Link to='/menu'>MENU</Link>
        </li>
        <li>
          <Link to='/booking'>RESERVATION</Link>
        </li>
        <li>
          <Link to='/order'>ONLINE ORDER</Link>
        </li>
        <li className='nav-link-login'>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
