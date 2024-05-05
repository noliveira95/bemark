import './Popup.css';
import { useEffect, useState } from 'react';
import { getAllItems, getBookmarkTree } from './utils/utils';
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
      {/* TODO: Make title sticky when top is reached */}
      {/* TODO: Add actions for all bookmarks */}
      <div className="items-list-title">
        <h1>All Bookmarks</h1>
        <div className="title-actions"></div>
      </div>
      {allItems.length === 0 && (
        <p className="no-items-message">No bookmarks yet!</p>
      )}
      <ul className="items-list">{getAllItems(allItems)}</ul>
      <Search />
    </div>
  );
}

export default Popup;
