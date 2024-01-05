// const Footer = () => {
//   return (
//     <footer className='grid-footer'>
//       <img src='Logo.jpg' alt='restaurant logo' />

//       <div>
//         <h4>Doormat Navigation</h4>
//         <a href='/' target='_blank'>
//           Home
//         </a>
//         <a href='/' target='_blank'>
//           About
//         </a>
//         <a href='/' target='_blank'>
//           Menu
//         </a>
//         <a href='/' target='_blank'>
//           Reservations
//         </a>
//         <a href='/' target='_blank'>
//           Order Online
//         </a>
//         <a href='/' target='_blank'>
//           Login
//         </a>
//       </div>
//       <div>
//         <h4>Contact</h4>
//         <a href='/' target='_blank'>
//           Placeholder
//         </a>
//       </div>
//       <div>
//         <h4>Social Media Links</h4>
//         <a href='/' target='_blank'>
//           Placeholder
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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
                Address: <br /> Shop 4, 961 Boulevard Rd
              </li>
              <li>
                Phone: <br /> 07 123456 2939
              </li>
              <li>
                Email: <br /> <a href='/'>little@lemon.com</a>
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
        </div>
      </section>
      <h4>© Copyright 2024 Manjil Thapa</h4>
    </footer>
  );
};

export default Footer;
