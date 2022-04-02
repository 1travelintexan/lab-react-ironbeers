import React from 'react';
import { Link } from 'react-router-dom';
import header from '../assets/header.png';
function Header() {
  return (
    <div>
      <Link to="/">
        <img
          src={header}
          alt="header"
          style={{ width: '100%', height: '150px' }}
        />
      </Link>
    </div>
  );
}

export default Header;
