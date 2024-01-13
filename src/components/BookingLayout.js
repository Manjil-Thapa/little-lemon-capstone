import About from './sections/About';
import Specials from './sections/Specials';
import Testimonials from './sections/Testimonials';

const BookingLayout = ({ children }) => (
  <>
    {children}
    <Specials />
    <Testimonials />
    <About />
  </>
);

export default BookingLayout;
