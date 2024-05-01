// import React from 'react';
import PropTypes from 'prop-types';

function Bookmark({ url, title }) {
  return (
    <li className="bookmark">
      <a href={url} target="_blank" rel="noreferrer">
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
