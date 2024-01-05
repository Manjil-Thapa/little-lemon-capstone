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
    ); // Adjust threshold as needed

    testimonialsContents.forEach(content => {
      observer.observe(content);
    });

    // Cleanup observer on component unmount
    return () => {
      testimonialsContents.forEach(content => {
        observer.unobserve(content);
      });
    };
  }, []); // Empty dependency array to run the effect only once
  return (
    <section className='testimonials'>
      <h2>Customers Stories</h2>
      <div className='testimonials-container'>
        <article className='testimonials-content'>
          <img src='avatar-placeholder.jpg' alt='placeholder' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, fuga
            fugiat. Blanditiis
          </p>
          <h3>John Hawkings</h3>
          <h4>Rating</h4>
        </article>

        <article className='testimonials-content'>
          <img src='avatar-placeholder.jpg' alt='placeholder' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, fuga
            fugiat. Blanditiis
          </p>
          <h3>Name</h3>
          <h4>Rating</h4>
        </article>

        <article className='testimonials-content'>
          <img src='avatar-placeholder.jpg' alt='placeholder' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, fuga
            fugiat. Blanditiis
          </p>
          <h3>Name</h3>
          <h4>Rating</h4>
        </article>

        <article className='testimonials-content'>
          <img src='avatar-placeholder.jpg' alt='placeholder' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, fuga
            fugiat. Blanditiis
          </p>
          <h3>Name</h3>
          <h4>Rating</h4>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
