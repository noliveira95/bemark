import './Popup.css';
import { useEffect, useState } from 'react';
import { getAllItems } from './utils';
import Navbar from './components/Navbar';

function Popup() {
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    chrome.bookmarks.getTree((tree) => {
      setAllItems(tree[0].children);
    });
  }, []);

  return (
    <div id="popup">
      <Navbar />
      <ul className="items-list">{getAllItems(allItems)}</ul>
    </div>
  );
}

export default Popup;
