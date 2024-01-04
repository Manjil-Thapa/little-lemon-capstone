const About = () => {
  return (
    <section className='about-section'>
      <div className='about-bg'>
        <div className='about'>
          <div className='about-left'>
            <h2 id='about'>About Little Lemon</h2>
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
            <button>Read More</button>
          </div>
          <div className='about-right'>
            <img src='hero-img.jpg' alt='placeholder' />
            <img src='hero-img.jpg' alt='placeholder' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
