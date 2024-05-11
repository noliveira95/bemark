import { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import SearchField from './SearchField';
import { BsMic } from 'react-icons/bs';

function Search() {
  const [showResults, setShowResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchBookmarks = async (query) => {
      const lowerCaseQuery = query.toLowerCase();
      const results = await chrome.bookmarks.search(query);
      results.sort((a, b) => {
        const lowerCaseTitleA = a.title.toLowerCase();
        const lowerCaseTitleB = b.title.toLowerCase();
        if (lowerCaseTitleA === lowerCaseQuery) return -1;
        if (lowerCaseTitleB === lowerCaseQuery) return 1;
        return 0;
      });
      setSearchResults(results);
    };

    searchBookmarks(searchQuery);
  }, [searchQuery]);

  return (
    <div id="search">
      <SearchResults showResults={showResults} results={searchResults} />
      <div className="search-bar">
        <SearchField
          setShowResults={setShowResults}
          setSearchQuery={setSearchQuery}
          searchResults={searchResults}
        />
        <button>
          <BsMic className="mic-icon" />
        </button>
      </div>
    </div>
  );
}

export default Search;
