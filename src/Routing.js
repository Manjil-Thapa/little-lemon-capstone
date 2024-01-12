import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/OtherComponents/AboutPage';
import BookingConfirm from './components/OtherComponents/BookingConfirm';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/reservation' element={'/'} />
      <Route path='/confirmation' element={<BookingConfirm />} />
    </Routes>
  );
};

export default Routing;
