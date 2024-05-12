import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';

function SearchField({
  setShowResults,
  searchQuery,
  setSearchQuery,
  searchResults,
}) {
  return (
    <div className="search-field-container">
      <BsSearch className="search-icon" />
      <input
        type="search"
        className="search-field"
        placeholder="Search bookmarks..."
        value={searchQuery}
        onFocus={() => setShowResults(true)}
        onBlur={() => {
          if (searchResults.length !== 0) {
            return;
          } else {
            setShowResults(false);
          }
        }}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

SearchField.propTypes = {
  showResults: PropTypes.bool,
  setShowResults: PropTypes.func,
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
  searchResults: PropTypes.array,
};

export default SearchField;
