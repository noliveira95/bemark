// import React from 'react';
import PropTypes from 'prop-types';
import { BsFileEarmark } from 'react-icons/bs';
function Bookmark({ url, title }) {
  return (
    <li className="bookmark">
      <BsFileEarmark className="bookmark-icon" />
      <a className="bookmark-title" href={url} target="_blank" rel="noreferrer">
        {title}
      </a>
    </li>
  );
}

Bookmark.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Bookmark;
