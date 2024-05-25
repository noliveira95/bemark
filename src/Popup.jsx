import './Popup.css';
import { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Home from './screens/Home';
import AddBookmark from './screens/AddBookmark';
import AddFolder from './screens/AddFolder';

export const ScreenContext = createContext();

function Popup() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const setScreen = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <ScreenContext.Provider value={{ currentScreen, setScreen }}>
      <div id="popup" className="popup">
        <Navbar setScreen={setScreen} />
        {currentScreen === 'home' && <Home />}
        {currentScreen === 'addBookmark' && <AddBookmark />}
        {currentScreen === 'addFolder' && <AddFolder />}
        <Search />
      </div>
    </ScreenContext.Provider>
  );
}

export default Popup;
