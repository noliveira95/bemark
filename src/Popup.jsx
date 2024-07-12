import './Popup.css';
import { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Home from './screens/Home';
import AddBookmark from './screens/AddBookmark';
import AddFolder from './screens/AddFolder';
import Loading from './screens/Loading';
import { getCurrentTabInfo } from './api/tabs';
import { useEffect } from 'react';
import { getBookmarkTree, getFavorites } from './api/bookmarks';

export const ScreenContext = createContext();
export const CurrentTabContext = createContext();
export const BookmarksContext = createContext();

function Popup() {
  const [currentScreen, setCurrentScreen] = useState('loading');
  const [currentTab, setCurrentTab] = useState({ title: '', url: '' });
  const [allItems, setAllItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If allItems are fetched successfully, attempt to fetch favorites
    if (allItems.length > 0) {
      getFavorites(allItems)
        .then((items) => {
          setFavorites(items);
          setIsLoading(false); // Update loading state after both are loaded
        })
        .catch(console.error);
    }
  }, [allItems]);

  // This useEffect is for initial component mount
  useEffect(() => {
    getBookmarkTree()
      .then((items) => {
        setAllItems(items);
        // Do not set isLoading to false here, let the other useEffect handle it
      })
      .catch(console.error);
  }, [currentScreen]);

  useEffect(() => {
    if (!isLoading) {
      setCurrentScreen('home'); // Update the screen only when loading is complete
    }
  }, [isLoading]);

  const setScreen = (screen) => {
    if (screen === 'home') {
      setCurrentScreen('loading');

      setTimeout(() => {
        setCurrentScreen(screen);
      }, 100);
    } else {
      setCurrentScreen(screen);
    }

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
    <BookmarksContext.Provider value={{ allItems, favorites }}>
      <ScreenContext.Provider value={{ currentScreen, setScreen }}>
        <CurrentTabContext.Provider value={{ currentTab, setCurrentTab }}>
          <div id="popup" className="popup">
            <Navbar setScreen={setScreen} />
            {currentScreen === 'loading' && <Loading />}
            {currentScreen === 'home' && <Home />}
            {currentScreen === 'addBookmark' && <AddBookmark />}
            {currentScreen === 'addFolder' && <AddFolder />}
            <Search />
          </div>
        </CurrentTabContext.Provider>
      </ScreenContext.Provider>
    </BookmarksContext.Provider>
  );
}

export default Popup;
