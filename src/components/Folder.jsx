// import React from 'react'
import { getAllItems } from '../utils';
import PropTypes from 'prop-types';

function Folder({ title, items }) {
  return (
    <li className="folder">
      {title}
      <ul>{getAllItems(items)}</ul>
    </li>
  );
}

Folder.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default Folder;
