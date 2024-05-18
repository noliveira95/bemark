import '../Popup.css';
import { getAllItems } from '../utils/utils';
import PropTypes from 'prop-types';

function ItemsList({ allItems }) {
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

ItemsList.propTypes = {
  allItems: PropTypes.array.isRequired,
  scrollY: PropTypes.number.isRequired,
};

export default ItemsList;
