import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <section>
        <div className='hero'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are family owned Mediterraneran restaurant, focused on traditional
            recipes served with a modern twist.
          </p>

          <button aria-label='On Click' className='hero-btn'>
            <Link to='/booking'>Reserve Table</Link>
          </button>
        </div>

        <div className='hero-img-container'>
          <img className='hero-img' src='hero-img.jpg' alt='' />
        </div>
      </section>
    </header>
  );
};

export default Header;
