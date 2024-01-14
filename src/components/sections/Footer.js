import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <section>
        <div className='footer-info'>
          <img src='footer-logo.png' alt='footer logo' />
        </div>
        <div className='footer-links'>
          <div>
            <h3>SITEMAP</h3>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/menu'>Menu</Link>
              </li>
              <li>
                <Link to='/booking'>Reservation</Link>
              </li>
              <li>
                <Link to='/order'>Order Online</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>CONTACT</h3>
            <ul>
              <li>
                Location: <br /> Upper Level <br /> Shop 4, 961 Boulevard Rd
              </li>
              <li>
                Phone: <br /> 07 123456 2939
              </li>
              <li>
                Email: <br />
                <a href='mailto: little-lemon@gmail.com'>little-lemon@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>SOCIAL</h3>
            <ul>
              <li>
                <a
                  href='https://facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>OPENING HOURS</h3>
            <ul>
              <li>
                Weekdays <br /> 1PM - 9PM
              </li>
              <li>
                Weekends & Holidays <br /> 2PM - 8PM
              </li>
            </ul>
          </div>
        </div>
      </section>
      <h4>© 2024 Manjil Thapa</h4>
    </footer>
  );
};

export default Footer;
