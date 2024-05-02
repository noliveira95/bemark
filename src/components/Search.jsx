// import React from 'react'
import { BsSearch } from 'react-icons/bs';

function Search() {
  return (
    <div id="search">
      <div className="search-field-container">
        <BsSearch className="search-icon" />
        <input type="search" className="search-field" />
      </div>
    </div>
  );
}

export default Search;
