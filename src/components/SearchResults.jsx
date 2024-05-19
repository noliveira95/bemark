import styles from './styles/Search.module.css';
import { getBookmarks } from '../utils/utils';
import { PropTypes } from 'prop-types';
import { BsX } from 'react-icons/bs';

function SearchResults({ showResults, results, onClose }) {
  return (
    <div
      className={`${styles['search-results']} ${
        showResults ? styles.active : ''
      }`}
    >
      <button onClick={onClose}>
        <BsX className={styles['close-icon']} />
      </button>
      <h1 className={styles['search-results-heading']}>Search Results</h1>
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
  onClose: PropTypes.func,
};

export default SearchResults;
