import '../Popup.css';
import { useEffect, useState } from 'react';
import FavoritesList from '../components/FavoritesList';
import ItemsList from '../components/ItemsList';
import { getBookmarkTree, getFavorites } from '../api/bookmarks';
import PropTypes from 'prop-types';

function Home({ scrollY }) {
  const [allItems, setAllItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Effect to load all items only once on component mount
  useEffect(() => {
    setIsLoading(true);
    getBookmarkTree()
      .then((items) => {
        setAllItems(items);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  // Separate effect to update favorites when allItems changes
  useEffect(() => {
    if (allItems.length > 0) {
      getFavorites(allItems).then(setFavorites).catch(console.error);
    }
  }, [allItems]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="screen">
      <FavoritesList favorites={favorites} />
      <ItemsList allItems={allItems} scrollY={scrollY} />
    </div>
  );
}

Home.propTypes = {
  scrollY: PropTypes.number,
};

export default Home;
