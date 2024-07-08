import styles from './styles/ListItem.module.css';
import { useState } from 'react';
import { getAllItems } from '../api/bookmarks';
import PropTypes from 'prop-types';
import { BsFolderFill } from 'react-icons/bs';
import ItemActions from './ItemActions';
import { deleteBookmark, updateBookmark } from '../api/bookmarks';

function Folder({ id, title, items }) {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isRootFolder =
    title === 'Bookmarks' ||
    title === 'Bookmarks Bar' ||
    title === 'Other Bookmarks' ||
    title === 'Mobile Bookmarks' ||
    title === 'Bemark Favorites';

  const handleUpdate = async (newTitle) => {
    updateBookmark(id, newTitle);
    setCurrentTitle(newTitle);
  };

  const handleDelete = () => {
    deleteBookmark(id);
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null;
  }

  return (
    <li className={styles.folder}>
      <div className={styles['folder-row']}>
        <button
          className={styles['folder-button']}
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsFolderFill className={styles['folder-icon']} />
          {currentTitle}
        </button>
        <ItemActions
          currentTitle={currentTitle}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          isVisible={isRootFolder ? false : true}
          isFolder={true}
        />
      </div>
      <ul
        className={`${styles['folder-items']} ${
          isOpen ? 'display-block' : 'display-none'
        }`}
      >
        {getAllItems(items)}
      </ul>
    </li>
  );
}

Folder.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default Folder;
