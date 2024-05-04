import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import SearchResults from './SearchResults';

function Search() {
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Function to search bookmarks based on query
    const searchBookmarks = async (query) => {
      // Use chrome.bookmarks.search() method to search for bookmarks
      const results = await chrome.bookmarks.search(query);
      setSearchResults(results);
    };

    // Call searchBookmarks() when results state changes
    searchBookmarks(searchResults);
  }, [searchResults]);

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
            onBlur={() => setShowResults(false)}
            onChange={(e) => setSearchResults(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
