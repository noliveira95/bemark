import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import SearchResults from './SearchResults';

function Search() {
  const [showResults, setShowResults] = useState(false);
  return (
    <div id="search">
      <SearchResults showResults={showResults} />
      <div className="search-bar">
        <div className="search-field-container">
          <BsSearch className="search-icon" />
          <input
            type="search"
            className="search-field"
            onFocus={() => setShowResults(true)}
            onBlur={() => setShowResults(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
