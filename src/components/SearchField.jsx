import { useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';

function SearchField({
  isListening,
  setShowResults,
  searchQuery,
  setSearchQuery,
  searchResults,
  transcript,
}) {
  const searchFieldRef = useRef(null);

  useEffect(() => {
    if (isListening) {
      searchFieldRef.current.focus();
    }
  }, [isListening]);

  useEffect(() => {
    if (isListening) {
      setSearchQuery(transcript);
    }
  }, [isListening, setSearchQuery, transcript]);

  return (
    <div className="search-field-container">
      <BsSearch className="search-icon" />
      <input
        className="search-field"
        placeholder="Search bookmarks..."
        ref={searchFieldRef}
        type="search"
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
  isListening: PropTypes.bool,
  showResults: PropTypes.bool,
  setShowResults: PropTypes.func,
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
  searchResults: PropTypes.array,
  transcript: PropTypes.string,
};

export default SearchField;
