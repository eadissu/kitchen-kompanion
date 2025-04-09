import { useState } from 'react';
import '../styling/Navbar.css';

/* Icons */
import PantryIcon from '../icons/PantryIcon';

function NavBarTab({icon, classname}) {

  return (
    <div className={`navbar-icon ${classname}`}>
      {icon}
    </div>
  );
}

export default NavBarTab;