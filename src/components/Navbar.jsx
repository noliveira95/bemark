// import React from 'react'
import { BsFileEarmarkPlus, BsFolderPlus, BsFilter } from 'react-icons/bs';
import PropTypes from 'prop-types';

function Navbar({ setScreen }) {
  return (
    <div id="navbar">
      <div className="logo">Filler</div>
      <div className="nav-icon-container">
        <button onClick={setScreen('filters')} className="nav-icon">
          <BsFilter />
        </button>
        <button onClick={setScreen('addFolder')} className="nav-icon">
          <BsFolderPlus />
        </button>
        <button onClick={setScreen('addBookmark')} className="nav-icon">
          <BsFileEarmarkPlus />
        </button>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  setScreen: PropTypes.func.isRequired,
};

export default Navbar;
