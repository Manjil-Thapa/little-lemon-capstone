import { useEffect, useRef, useState } from 'react';

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
