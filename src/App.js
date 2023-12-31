import './App.css';
import Header from './components/OtherComponents/Header';
import Footer from './components/OtherComponents/Footer';
import AppContainer from './components/AppContainer/AppContainer';
import HeroSection from './components/OtherComponents/HeroSection';
import Specials from './components/OtherComponents/Specials';
import Testimonials from './components/OtherComponents/Testimonials';

function App() {
  return (
    <AppContainer>
      <Header />
      <HeroSection />
      <Specials />
      <Testimonials />
      <Footer />
    </AppContainer>
  );
}

export default App;
