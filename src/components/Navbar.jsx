// import React from 'react'
import { BsFileEarmarkPlus, BsFolderPlus, BsFilter } from 'react-icons/bs';

function Navbar() {
  return (
    <div id="navbar">
      <div className="logo">Filler</div>
      <div className="nav-icon-container">
        <BsFilter className="nav-icon" />
        <BsFolderPlus className="nav-icon" />
        <BsFileEarmarkPlus className="nav-icon" />
      </div>
    </div>
  );
}

export default Navbar;
