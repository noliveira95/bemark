import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import SearchResults from './SearchResults';

function Search() {
  const [showResults, setShowResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchBookmarks = async (query) => {
      const results = await chrome.bookmarks.search(query);
      setSearchResults(results);
    };

    searchBookmarks(searchQuery);
  }, [searchQuery]);

  return (
    <div id="search">
      <SearchResults showResults={showResults} results={searchResults} />
      <div className="search-bar">
        <div className="search-field-container">
          <BsSearch className="search-icon" />
          <input
            type="search"
            className="search-field"
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
      </div>
    </div>
  );
}

export default Search;
