import styles from './styles/Bookmark.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsFileEarmark, BsStar, BsTrash } from 'react-icons/bs';
import EditDialog from './EditDialog';
import { updateBookmark } from '../api/bookmarks';

function Bookmark({ id, url, title, isFavorite = false }) {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentUrl, setCurrentUrl] = useState(url);

  const handleUpdate = (newTitle, newUrl) => {
    updateBookmark(id, newTitle, newUrl);
    setCurrentTitle(newTitle);
    setCurrentUrl(newUrl);
  };

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
          onUpdate={handleUpdate}
        />
        <button className={styles['action-button']}>
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
  isFavorite: PropTypes.bool,
};

export default Bookmark;
