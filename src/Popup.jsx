import './Popup.css';
import { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Home from './screens/Home';
import AddBookmark from './screens/AddBookmark';
import AddFolder from './screens/AddFolder';
import { getCurrentTabInfo } from './api/tabs';

export const ScreenContext = createContext();
export const CurrentTabContext = createContext();

function Popup() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [currentTab, setCurrentTab] = useState({ title: '', url: '' });

  const setScreen = (screen) => {
    setCurrentScreen(screen);
    if (screen === 'addBookmark') {
      getCurrentTabInfo()
        .then((tab) => {
          setCurrentTab({ title: tab.title, url: tab.url });
        })
        .catch((error) => {
          console.error('Error getting current tab info:', error);
        });
    }
  };

  return (
    <ScreenContext.Provider value={{ currentScreen, setScreen }}>
      <CurrentTabContext.Provider value={{ currentTab, setCurrentTab }}>
        <div id="popup" className="popup">
          <Navbar setScreen={setScreen} />
          {currentScreen === 'home' && <Home />}
          {currentScreen === 'addBookmark' && <AddBookmark />}
          {currentScreen === 'addFolder' && <AddFolder />}
          <Search />
        </div>
      </CurrentTabContext.Provider>
    </ScreenContext.Provider>
  );
}

export default Popup;
