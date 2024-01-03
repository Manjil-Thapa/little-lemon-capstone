import { BrowserRouter } from 'react-router-dom';
import './App.css';

import AppContainer from './components/AppContainer/AppContainer';
import Navbar from './components/OtherComponents/Nav';
import Main from './components/OtherComponents/Main';
import Menu from './components/OtherComponents/Menu';
import Footer from './components/OtherComponents/Footer';
import About from './components/OtherComponents/About';
import Testimonials from './components/OtherComponents/Testimonials';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppContainer>
        <Main />
        <Menu />
        <Testimonials />
        <About />
      </AppContainer>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
