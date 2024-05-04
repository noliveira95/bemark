// import React from 'react'
import { PropTypes } from 'prop-types';

function SearchResults({ showResults }) {
  return (
    <div className={`search-results ${showResults ? 'active' : ''}`}>
      <h1>Search Results</h1>
      <p className="no-items-message">Start typing to search</p>
    </div>
  );
}

SearchResults.propTypes = {
  showResults: PropTypes.bool,
};

export default SearchResults;
