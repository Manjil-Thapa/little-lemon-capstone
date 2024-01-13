import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    const aboutLeft = document.querySelector('.about-left');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(aboutLeft);

    return () => observer.disconnect();
  }, []);

  return (
    <section className='about-section'>
      <div className='about-bg'>
        <div className='about'>
          <div className='about-left'>
            <h2>About Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Little Lemon is a charming neighborhood bistro that serves simple food
              and classic cocktails in a lively but casual environment. The
              restaurant features a locally-sourced menu with daily specials.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nisi
              aspernatur commodi dicta deleniti iusto, facere hic, necessitatibus
              iure nulla quidem unde! Consequuntur explicabo, minus sed aut vitae
              expedita culpa.
            </p>
            <button>
              <Link to='/about'>Read More</Link>
            </button>
          </div>
          <div className='about-right'>
            <img src='restaurant.jpg' alt='placeholder' />
            <img src='mario-adrian.jpg' alt='placeholder' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
