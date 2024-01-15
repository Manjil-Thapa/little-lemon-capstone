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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`} ref={headRef}>
      <div className='test'>
        <Link to='/' className='logo'>
          <img src='Logo.svg' alt='logo' />
        </Link>

        <div className='burger-icon' onClick={toggleMenu}>
          <img src='hamburger-menu.svg' alt='burger button' />
        </div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'mobile' : ''}`}>
        <li>
          <Link to='/' onClick={closeMenu}>
            HOME
          </Link>
        </li>
        <li>
          <Link to='/about' onClick={closeMenu}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to='/menu' onClick={closeMenu}>
            MENU
          </Link>
        </li>
        <li>
          <Link to='/booking' onClick={closeMenu}>
            RESERVATION
          </Link>
        </li>
        <li>
          <Link to='/order' onClick={closeMenu}>
            ONLINE ORDER
          </Link>
        </li>
        <li className='nav-link-login'>
          <Link to='/login' onClick={closeMenu}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
