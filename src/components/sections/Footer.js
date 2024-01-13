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
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>About</a>
              </li>
              <li>
                <a href='/'>Menu</a>
              </li>
              <li>
                <a href='/'>Reservations</a>
              </li>
              <li>
                <a href='/'>Order Online</a>
              </li>
              <li>
                <a href='/'>Login</a>
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
                Email: <br /> <a href='/'>little-lemon@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>SOCIAL</h3>
            <ul>
              <li>
                <a href='/' target='_blank'>
                  Facebook
                </a>
              </li>
              <li>
                <a href='/' target='_blank'>
                  Instagram
                </a>
              </li>
              <li>
                <a href='/' target='_blank'>
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