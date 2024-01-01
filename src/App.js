import { BrowserRouter } from 'react-router-dom';
import './App.css';

import AppContainer from './components/AppContainer/AppContainer';
import Header from './components/OtherComponents/Header';
import Navbar from './components/OtherComponents/Nav';
import BookingForm from './components/OtherComponents/BookingForm';

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Navbar />
        <Header />
        <BookingForm />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
