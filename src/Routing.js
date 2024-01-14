import { Route, Routes } from 'react-router-dom';
import BookingForm from './components/pages/BookingForm';
import BookingConfirm from './components/pages/BookingConfirm';
import LoginPage from './components/pages/LoginPage';
import AboutPage from './components/pages/AboutPage';
import MenuPage from './components/pages/MenuPage';
import BookingLayout from './components/BookingLayout';
import Hero from './components/sections/Hero';
import Specials from './components/sections/Specials';
import Testimonials from './components/sections/Testimonials';
import About from './components/sections/About';
import OnlineOrder from './components/pages/OnlineOrder';

const Routing = ({ availableTimes, updateTimes, formSubmit }) => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
          </>
        }
      />
      <Route
        path='/booking'
        element={
          <>
            <BookingLayout>
              <BookingForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                formSubmit={formSubmit}
              />
            </BookingLayout>
          </>
        }
      />
      <Route
        path='/booking-success'
        element={
          <>
            <BookingLayout>
              <BookingConfirm />
            </BookingLayout>
          </>
        }
      />
      <Route path='/about/' element={<AboutPage />} />
      <Route path='/menu/' element={<MenuPage />} />
      <Route path='/order' element={<OnlineOrder />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
};

export default Routing;
