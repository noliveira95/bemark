import '../Popup.css';
import FavoritesList from '../components/FavoritesList';
import ItemsList from '../components/ItemsList';
import PropTypes from 'prop-types';
import { BookmarksContext } from '../Popup';
import { useContext } from 'react';

function Home({ scrollY }) {
  const { allItems } = useContext(BookmarksContext);

  return (
    <div className="screen">
      <FavoritesList items={allItems} />
      <ItemsList scrollY={scrollY} />
    </div>
  );
}

Home.propTypes = {
  scrollY: PropTypes.number,
};

export default Home;
