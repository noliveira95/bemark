import '../Popup.css';
import { useState, useEffect } from 'react';
import { getFavorites } from '../api/bookmarks';
import { PropTypes } from 'prop-types';

function FavoritesList({ allItems }) {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (allItems.length > 0) {
      setIsLoading(true);
      getFavorites(allItems)
        .then((favorites) => {
          setFavorites(favorites);
        })
        .catch((error) => {
          console.error('Error fetching favorites:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [allItems]);

  return (
    <div className="favorites-list">
      <h1>Favorites</h1>
      {isLoading ? (
        <p className="loading-message">Loading...</p>
      ) : favorites.length === 0 ? (
        <p className="no-items-message">No favorites yet!</p>
      ) : (
        <ul>{favorites}</ul>
      )}
    </div>
  );
}

FavoritesList.propTypes = {
  allItems: PropTypes.array.isRequired,
};

export default FavoritesList;
