import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <section>
        {/* banner */}
        <div className='banner'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are family owned Mediterraneran restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <Link to='/booking'>
            <button aria-label='On Click'>Reserve Table</button>
          </Link>
        </div>

        <div className='banner-img'>
          <img src='hero-img.jpg' alt='' />
        </div>
      </section>
    </header>
  );
};

export default Header;
