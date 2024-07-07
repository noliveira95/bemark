import { BsFileEarmarkPlus, BsFolderPlus } from 'react-icons/bs';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

function Navbar({ setScreen }) {
  return (
    <nav id="navbar" className="navbar">
      <div className="logo" onClick={() => setScreen('home')}>
        Filler
      </div>
      <div className="nav-icon-container">
        {/* TODO: Set up filters */}
        {/* <IconButton
          icon={<BsFilter className="nav-icon" />}
          onClick={() => setScreen('filters')}
        /> */}
        <IconButton
          icon={<BsFolderPlus className="nav-icon" />}
          onClick={() => setScreen('addFolder')}
        />
        <IconButton
          icon={<BsFileEarmarkPlus className="nav-icon" />}
          onClick={() => setScreen('addBookmark')}
        />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  setScreen: PropTypes.func.isRequired,
};

export default Navbar;
