import { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    const testimonialsContents = document.querySelectorAll('.testimonials-content');

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

    testimonialsContents.forEach(content => {
      observer.observe(content);
    });

    return () => {
      testimonialsContents.forEach(content => {
        observer.unobserve(content);
      });
    };
  }, []);
  return (
    <section className='testimonials'>
      <h2>Customers Stories</h2>
      <div className='testimonials-container'>
        <article className='testimonials-content'>
          <img src='avatar.jpg' alt='placeholder' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, fuga
            fugiat. Blanditiis
          </p>
          <h3>John</h3>
          <img src='/star.png' alt='rating' />
        </article>

        <article className='testimonials-content'>
          <img src='avatar.jpg' alt='placeholder' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, fuga
            fugiat. Blanditiis
          </p>
          <h3>Sam</h3>
          <img src='/star.png' alt='rating' />
        </article>

        <article className='testimonials-content'>
          <img src='avatar.jpg' alt='placeholder' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, fuga
            fugiat. Blanditiis
          </p>
          <h3>Martin</h3>
          <img src='/star.png' alt='rating' />
        </article>

        <article className='testimonials-content'>
          <img src='avatar.jpg' alt='placeholder' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, fuga
            fugiat. Blanditiis
          </p>
          <h3>William</h3>
          <img src='/star.png' alt='rating' />
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
