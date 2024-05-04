// import React from 'react';
import PropTypes from 'prop-types';
import { BsFileEarmark, BsStar } from 'react-icons/bs';
function Bookmark({ url, title, isFavorite = false }) {
  return (
    <li className="bookmark">
      {isFavorite ? (
        <BsStar className="bookmark-icon" />
      ) : (
        <BsFileEarmark className="bookmark-icon" />
      )}
      <a className="bookmark-title" href={url} target="_blank" rel="noreferrer">
        {title}
      </a>
    </li>
  );
}

Bookmark.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
};

export default Bookmark;
