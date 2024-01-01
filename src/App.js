import { BrowserRouter } from 'react-router-dom';
import './App.css';

import AppContainer from './components/AppContainer/AppContainer';
import Navbar from './components/OtherComponents/Nav';
import Main from './components/OtherComponents/Main';
import Menu from './components/OtherComponents/Menu';

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Navbar />
        <Main />
        <Menu />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
