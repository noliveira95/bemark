import './Popup.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Home from './screens/Home';
import AddBookmark from './components/AddBookmarkForm';

function Popup() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const setScreen = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div id="popup" className="popup">
      <Navbar setScreen={setScreen} />
      {currentScreen === 'home' && <Home />}
      {currentScreen === 'addBookmark' && <AddBookmark />}
      {/* {currentScreen === 'home' && <Home scrollY={scrollY} />} */}
      <Search />
    </div>
  );
}

export default Popup;
