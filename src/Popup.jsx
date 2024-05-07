import './Popup.css';
import { useEffect, useState } from 'react';
import { getBookmarkTree } from './utils/utils';
import Navbar from './components/Navbar';
import Search from './components/Search';
import FavoritesList from './components/FavoritesList';
import ItemsList from './components/ItemsList';

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
      <ItemsList allItems={allItems} scrollY={scrollY} />
      <Search />
    </div>
  );
}

export default Popup;
