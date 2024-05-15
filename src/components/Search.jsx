import { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import SearchField from './SearchField';
import { BsMic, BsStop } from 'react-icons/bs';
import useVoiceToText from '../hooks/useVoiceToText';

function Search() {
  const [showResults, setShowResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const { isListening, startListening, stopListening, transcript } =
    useVoiceToText({ continuous: true });

  const handleMicClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleClose = () => {
    setShowResults(false);
  };

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

    if (isListening) {
      searchBookmarks(transcript);
    } else {
      searchBookmarks(searchQuery);
    }
  }, [isListening, searchQuery, transcript]);

  return (
    <div id="search">
      <SearchResults
        showResults={showResults}
        results={searchResults}
        onClose={handleClose}
      />
      <div className="search-bar">
        <SearchField
          isListening={isListening}
          setShowResults={setShowResults}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchResults={searchResults}
          transcript={transcript}
        />
        {isListening ? (
          <button onClick={handleMicClick}>
            <BsStop className="mic-icon" />
          </button>
        ) : (
          <button onClick={handleMicClick}>
            <BsMic className="mic-icon" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Search;
