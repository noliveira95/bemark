import './Popup.css';
import { useEffect } from 'react';
import { addBookmark, removeBookmark, displayBookmarks } from './utils';

function Popup() {
  useEffect(() => {
    // Search the bookmarks when entering the search keyword.
    // Get the bookmarks and display them in the popup
    chrome.bookmarks.getTree((tree) => {
      const bookmarkList = document.getElementById('bookmarkList');
      displayBookmarks(tree[0].children, bookmarkList);
    });
  }, []);

  return (
    <div>
      <button id="addButton" onClick={addBookmark}>
        Add Bookmark
      </button>
      <button id="removeButton" onClick={removeBookmark}>
        Remove Added Bookmarks
      </button>
      <ul id="bookmarkList"></ul>
    </div>
  );
}

export default Popup;
