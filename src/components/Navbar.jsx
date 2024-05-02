// import React from 'react'
import { BsFilePlus, BsFolderPlus, BsFilter } from 'react-icons/bs';

function Navbar() {
  return (
    <div id="navbar">
      <div className="logo">Filler</div>
      <div className="nav-icon-container">
        <BsFilter className="nav-icon" />
        <BsFolderPlus className="nav-icon" />
        <BsFilePlus className="nav-icon" />
      </div>
    </div>
  );
}

export default Navbar;
