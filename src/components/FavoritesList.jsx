import '../Popup.css';
import { PropTypes } from 'prop-types';

function FavoritesList({ favorites }) {
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
  favorites: PropTypes.array.isRequired,
};

export default FavoritesList;
