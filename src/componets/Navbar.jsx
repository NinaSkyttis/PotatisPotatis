/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRecipes} from '../actions/actions';
import '../scss/_navbar_footer.scss';
import logoblack from '../img/logoblack.png';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="nav navbar">
      <ul>
        <li>
          <Link to="/inspiration">inspiration</Link>
        </li>
        <li>
          <Link to="/my-cookbook">my cookbook</Link>
        </li>
      </ul>
      <div>
        <Link to="/homepage"><img src={logoblack} alt="Logo" /></Link>
      </div>
      <ul>
        <li>
          <Link to="/welcome-page">welcome page</Link>
        </li>
        <li>
          <Link to="/login-signup">login/signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
