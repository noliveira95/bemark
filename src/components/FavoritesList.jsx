import '../Popup.css';
import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { getFavorites } from '../api/bookmarks';

function FavoritesList({ items }) {
  const [favorites, setFavorites] = useState([]);

  // Separate effect to update favorites when allItems changes
  useEffect(() => {
    if (items.length > 0) {
      getFavorites(items).then(setFavorites).catch(console.error);
    }
  }, [items]);

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
