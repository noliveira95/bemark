import './Popup.css';
import { useEffect } from 'react';
import { getAllItems } from './utils';

function Popup() {
  useEffect(() => {
    // Search the bookmarks when entering the search keyword.
    // Get the bookmarks and display them in the popup
    chrome.bookmarks.getTree((tree) => {
      const bookmarkList = document.getElementById('bookmarkList');
      getAllItems(tree[0].children, bookmarkList);
    });
  }, []);

  return (
    <div>
      <ul id="bookmarkList"></ul>
    </div>
  );
}

export default Popup;
