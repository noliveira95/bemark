import '../Popup.css';
import { useEffect, useState } from 'react';
import FavoritesList from '../components/FavoritesList';
import ItemsList from '../components/ItemsList';
import { getBookmarkTree } from '../api/bookmarks';
import PropTypes from 'prop-types';

function Home({ scrollY }) {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    getBookmarkTree().then(setAllItems);
  }, []);

  return (
    <div className="screen">
      <FavoritesList allItems={allItems} />
      <ItemsList allItems={allItems} scrollY={scrollY} />
    </div>
  );
}

Home.propTypes = {
  scrollY: PropTypes.number,
};

export default Home;
