import '../Popup.css';
import { useState, useEffect } from 'react';
import { getFavorites } from '../utils';
import { PropTypes } from 'prop-types';

function FavoritesList({ allItems }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites(allItems).then(setFavorites);
  }, [allItems]);

  return (
    <div className="favorites-list">
      <h1>Favorites</h1>
      {favorites.length === 0 && (
        <p className="no-items-message">No favorites yet!</p>
      )}
      <ul>{favorites}</ul>
    </div>
  );
}

FavoritesList.propTypes = {
  allItems: PropTypes.array.isRequired,
};

export default FavoritesList;
