// import { Route, Routes } from 'react-router-dom';
// import AboutPage from './components/pages/AboutPage';
// import MenuPage from './components/pages/MenuPage';
// import Layout from './components/Layout';
// import LoginPage from './components/pages/LoginPage';
// import Routing from './Routing';
import Navbar from './components/sections/Nav';
import Main from './components/pages/Main';
import Footer from './components/sections/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
