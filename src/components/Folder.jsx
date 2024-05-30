import styles from './styles/Folder.module.css';
import { useState } from 'react';
import { getAllItems } from '../api/bookmarks';
import PropTypes from 'prop-types';
import { BsFolderFill } from 'react-icons/bs';

function Folder({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className={styles.folder}>
      <button
        className={styles['folder-button']}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles['folder-icon']}>
          <BsFolderFill />
        </div>
        {title}
      </button>
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
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default Folder;
