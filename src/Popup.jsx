import './Popup.css';
import { useEffect, useState } from 'react';
import { getAllItems, getBookmarkTree } from './utils';
import Navbar from './components/Navbar';
import Search from './components/Search';
import FavoritesList from './components/FavoritesList';

function Popup() {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    getBookmarkTree().then(setAllItems);
  }, []);

  return (
    <div id="popup">
      <Navbar />
      <FavoritesList allItems={allItems} />
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
