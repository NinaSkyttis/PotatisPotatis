/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRecipes} from '../actions/actions';
import '../scss/_navbar_footer.scss';
import logoblack from '../img/logoblack.png';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  const [showSearch, setShowSearch] = useState(false);

  const displaySearch = () => {
    const x = document.getElementById('search');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }

  return (
    <nav className="nav navbar">
      <ul>
        <li>
          <Link to="/inspiration">Inspiration</Link>
        </li>
        <li>
          <Link to="/my-cookbook">My Cookbook</Link>
        </li>
      </ul>
      <div>
        <Link to="/homepage"><img src={logoblack} alt="Logo" /></Link>
      </div>
      <ul>
        {/* <li className="searchLiInput" id="search">
          <form id="search" action="">
            <input id="searchInput" autoComplete="off" name="searchRecipe" placeholder="Search Recipe" type="text" style={{display: 'block'}}/>
          </form>
        </li> */}
        <li id="searchLiButton">
          {/* <button id="searchButton" onClick={(displaySearch)}> */}
            Search
          {/* </button> */}
        </li>
        <li>
          <Link to="/login-signup">Login / Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
