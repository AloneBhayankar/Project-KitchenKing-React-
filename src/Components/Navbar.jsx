import React from 'react';
import '../CSS/nav.css';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navlogo">
          <Link to="/">
            <img src={logo} alt="KK" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/recipes">Trending Recipes</Link></li>
          <li><Link to="/breakfast">Breakfast</Link></li>
          <li><Link to="/streetfood">Street Food</Link></li>
          <li><Link to="/dietfood">Diet Food</Link></li>
          <li><Link to="/dessert">Desert</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
