// import React from 'react';
import PropTypes from 'prop-types';
import { BsFileEarmark, BsStar, BsPencil, BsTrash } from 'react-icons/bs';
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
      <div className="bookmark-actions">
        <button className="bookmark-action-button">
          <BsPencil />
        </button>
        <button className="bookmark-action-button">
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
