import '../Popup.css';
import { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { BookmarksContext } from '../Popup';
// import { getFavorites } from '../api/bookmarks';

function FavoritesList() {
  const { favorites } = useContext(BookmarksContext);

  return (
    <div className="favorites-list">
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p className="no-items-message">No favorites yet!</p>
      ) : (
        <ul>{favorites}</ul>
      )}
    </div>
  );
}

FavoritesList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default FavoritesList;
