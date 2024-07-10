import { useContext } from 'react';
import '../Popup.css';
import { getAllItems } from '../api/bookmarks';
import { BookmarksContext } from '../Popup';

function ItemsList() {
  const { allItems } = useContext(BookmarksContext);
  return (
    <div className="items-list-container">
      <div className="items-list-title">
        <h1>All Bookmarks</h1>
        {/* <div
          className={`title-actions ${
            scrollY >= 220 ? 'opacity-1' : 'opacity-0'
          }`}
        >
          <BsDashSquare className="action-button" />
        </div> */}
      </div>
      {allItems.length === 0 && (
        <p className="no-items-message">No bookmarks yet!</p>
      )}
      <ul className="items-list">{getAllItems(allItems)}</ul>
    </div>
  );
}

export default ItemsList;
