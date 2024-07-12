import styles from './styles/ListItem.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsFileEarmark, BsStar } from 'react-icons/bs';
import {
  deleteBookmark,
  updateBookmark,
  addFavorite,
  removeFavorite,
} from '../api/bookmarks';
import ItemActions from './ItemActions';

function Bookmark({ id, url, title, favorite = false }) {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentUrl, setCurrentUrl] = useState(url);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleUpdate = async (newTitle, newUrl, isFavorite) => {
    updateBookmark(id, newTitle, newUrl);
    setCurrentTitle(newTitle);
    setCurrentUrl(newUrl);
    setIsFavorite(isFavorite);
    if (!isFavorite) {
      try {
        await removeFavorite(id);
      } catch (error) {
        console.error('Error removing favorite:', error);
      }
    } else {
      try {
        await addFavorite(id);
      } catch (error) {
        console.error('Error adding favorite:', error);
      }
    }
  };

  const handleDelete = async () => {
    try {
      await deleteBookmark(id);
      setIsDeleted(true);
    } catch (error) {
      console.error('Error deleting bookmark:', error);
    }
  };

  if (isDeleted) {
    return null;
  }

  return (
    <li className={styles.bookmark}>
      {isFavorite ? (
        <BsStar className={styles['bookmark-icon']} />
      ) : (
        <BsFileEarmark className={styles['bookmark-icon']} />
      )}
      <a
        className={styles['bookmark-title']}
        href={currentUrl}
        target="_blank"
        rel="noreferrer"
      >
        {currentTitle}
      </a>
      <ItemActions
        currentTitle={currentTitle}
        currentUrl={currentUrl}
        isFavorite={isFavorite}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </li>
  );
}

Bookmark.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
};

export default Bookmark;
