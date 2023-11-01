import React, { useState } from 'react';
import './MobileNav.scss';

function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        Menu
      </button>
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li className="has-dropdown">
          <a href="#">About</a>
          <ul className="sub-menu">
            <li><a href="#">Sub-Item 1</a></li>
            <li><a href="#">Sub-Item 2</a></li>
            <li><a href="#">Sub-Item 3</a></li>
          </ul>
        </li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default MobileNav;
