import './Popup.css';
import { useEffect, useState } from 'react';
import { getAllItems } from './utils';

function Popup() {
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    chrome.bookmarks.getTree((tree) => {
      setAllItems(tree[0].children);
    });
  }, []);

  return (
    <div>
      <ul id="bookmarkList">{getAllItems(allItems)}</ul>
    </div>
  );
}

export default Popup;
