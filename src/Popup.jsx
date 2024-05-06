import './Popup.css';
import { useEffect, useState } from 'react';
import { getAllItems, getBookmarkTree } from './utils/utils';
import Navbar from './components/Navbar';
import Search from './components/Search';
import FavoritesList from './components/FavoritesList';
import { BsDashSquare } from 'react-icons/bs';

function Popup() {
  const [allItems, setAllItems] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    getBookmarkTree().then(setAllItems);
  }, []);

  useEffect(() => {
    const popup = document.getElementById('popup');

    const handleScroll = () => {
      setScrollY(popup.scrollTop);
    };

    popup.addEventListener('scroll', handleScroll);

    return () => {
      popup.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="popup">
      <Navbar />
      <FavoritesList allItems={allItems} />
      <div className="items-list-title">
        <h1>All Bookmarks</h1>
        <div
          className={`title-actions ${
            scrollY >= 220 ? 'opacity-1' : 'opacity-0'
          }`}
        >
          <BsDashSquare className="title-actions-button" />
        </div>
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
