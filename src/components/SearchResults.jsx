import { getBookmarks } from '../utils/utils';
import { PropTypes } from 'prop-types';

function SearchResults({ showResults, results }) {
  return (
    <div className={`search-results ${showResults ? 'active' : ''}`}>
      <h1>Search Results</h1>
      {results.length === 0 ? (
        <p className="no-items-message">Start typing to search</p>
      ) : (
        <ul>{getBookmarks(results)}</ul>
      )}
    </div>
  );
}

SearchResults.propTypes = {
  showResults: PropTypes.bool,
  results: PropTypes.array,
};

export default SearchResults;
