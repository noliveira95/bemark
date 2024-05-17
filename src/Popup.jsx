import './Popup.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Home from './screens/Home';
import AddBookmark from './components/AddBookmarkForm';

function Popup() {
  const [scrollY, setScrollY] = useState(0);
  const [currentScreen, setCurrentScreen] = useState('home');

  const setScreen = (screen) => {
    setCurrentScreen(screen);
  };

  useEffect(() => {
    const popup = document.getElementById('popup');

    const handleScroll = () => {
      setScrollY(popup.scrollTop);
    };

    popup.addEventListener('scroll', handleScroll);

    return () => {
      popup.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div id="popup">
      <Navbar setScreen={setScreen} />
      {currentScreen === 'home' && <Home scrollY={scrollY} />}
      {currentScreen === 'addBookmark' && <AddBookmark />}
      {/* {currentScreen === 'home' && <Home scrollY={scrollY} />} */}
      <Search />
    </div>
  );
}

export default Popup;
