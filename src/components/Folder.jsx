import { useState } from 'react';
import { getAllItems } from '../utils';
import PropTypes from 'prop-types';
import { IoFolder, IoFolderOpen } from 'react-icons/io5';

function Folder({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="folder">
      <button className="folder-button" onClick={() => setIsOpen(!isOpen)}>
        <div className="folder-icon">
          {isOpen ? <IoFolderOpen /> : <IoFolder />}
        </div>
        {title}
      </button>
      <ul className={`folder-items ${isOpen ? 'visible' : 'hidden'}`}>
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
