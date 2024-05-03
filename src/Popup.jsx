import './Popup.css';
import { useEffect, useState } from 'react';
import { getAllItems, getBookmarkTree, getFavorites } from './utils';
import Navbar from './components/Navbar';
import Search from './components/Search';

function Popup() {
  const [allItems, setAllItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getBookmarkTree().then(setAllItems);
  }, []);

  useEffect(() => {
    getFavorites(allItems).then(setFavorites);
  }, [allItems]);

  return (
    <div id="popup">
      <Navbar />
      <h1>Favorites</h1>
      {favorites.length === 0 && (
        <p className="no-items-message">No favorites yet!</p>
      )}
      <ul className="favorites-list">{favorites}</ul>
      <h1>All Bookmarks</h1>
      {allItems.length === 0 && (
        <p className="no-items-message">No bookmarks yet!</p>
      )}
      <ul className="items-list">{getAllItems(allItems)}</ul>
      <Search />
    </div>
  );
}

export default Popup;
