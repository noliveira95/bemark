import styles from './styles/Bookmark.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsFileEarmark, BsStar, BsTrash } from 'react-icons/bs';
import EditDialog from './EditDialog';
import {
  deleteBookmark,
  updateBookmark,
  removeFavorite,
} from '../api/bookmarks';

function Bookmark({ id, url, title, favorite = false }) {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentUrl, setCurrentUrl] = useState(url);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorite);

  // TODO: Fix removeFavorite function
  const handleUpdate = async (newTitle, newUrl, isFavorite) => {
    updateBookmark(id, newTitle, newUrl);
    setCurrentTitle(newTitle);
    setCurrentUrl(newUrl);
    setIsFavorite(isFavorite);
    if (!isFavorite) {
      try {
        await removeFavorite(id);
      } catch (e) {
        console.error('Error removing favorite:', e);
      }
    }
  };

  const handleDelete = () => {
    deleteBookmark(id);
    setIsDeleted(true);
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
      <div className={styles['bookmark-actions']}>
        <EditDialog
          editButtonStyle={styles['action-button']}
          title={currentTitle}
          url={currentUrl}
          favorite={isFavorite}
          onUpdate={handleUpdate}
        />
        <button className={styles['action-button']} onClick={handleDelete}>
          <BsTrash />
        </button>
      </div>
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
