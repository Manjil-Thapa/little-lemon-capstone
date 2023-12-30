import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Header />
      <BookingForm />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
