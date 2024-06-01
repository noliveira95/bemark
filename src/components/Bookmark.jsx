import styles from './styles/Bookmark.module.css';
import PropTypes from 'prop-types';
import { BsFileEarmark, BsStar, BsTrash } from 'react-icons/bs';
import EditDialog from './EditDialog';

function Bookmark({ url, title, isFavorite = false }) {
  return (
    <li className={styles.bookmark}>
      {isFavorite ? (
        <BsStar className={styles['bookmark-icon']} />
      ) : (
        <BsFileEarmark className={styles['bookmark-icon']} />
      )}
      <a
        className={styles['bookmark-title']}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
      <div className={styles['bookmark-actions']}>
        <EditDialog
          editButtonStyle={styles['action-button']}
          title={title}
          url={url}
        />
        <button className={styles['action-button']}>
          <BsTrash />
        </button>
      </div>
    </li>
  );
}

Bookmark.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
};

export default Bookmark;
