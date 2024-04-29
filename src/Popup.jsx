import './Popup.css';
import { useEffect } from 'react';
import { addBookmark, removeBookmark } from './utils';

function Popup() {
  useEffect(() => {
    // Search the bookmarks when entering the search keyword.
    // Get the bookmarks and display them in the popup
    chrome.bookmarks.getTree((tree) => {
      const bookmarkList = document.getElementById('bookmarkList');
      displayBookmarks(tree[0].children, bookmarkList);
    });

    // Recursively display the bookmarks
    function displayBookmarks(nodes, parentNode) {
      for (const node of nodes) {
        // If the node is a bookmark, create a list item and append it to the parent node
        if (node.url) {
          const listItem = document.createElement('li');
          const link = document.createElement('a');
          link.href = node.url;
          link.target = '_blank';
          link.textContent = node.title;
          listItem.appendChild(link);
          parentNode.appendChild(listItem);
        }

        // If the node has children, recursively display them
        if (node.children) {
          const sublist = document.createElement('ul');
          parentNode.appendChild(sublist);
          displayBookmarks(node.children, sublist);
        }
      }
    }
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
