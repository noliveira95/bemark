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
      <ul className="favorites-list">{favorites}</ul>
      <h1>All Bookmarks</h1>
      <ul className="items-list">{getAllItems(allItems)}</ul>
      <Search />
    </div>
  );
}

export default Popup;
