/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../actions/actions';
import '../scss/_navbar_footer.scss';
import logoblack from '../img/logoblack.png';

const Navbar = (props) => {
  return (
    <nav className="nav navbar">
      <ul>
        <li><a href="/">inspiration</a></li>
        <li><a href="/my-cookbook">my cookbook</a></li>
      </ul>
      <img src={logoblack} alt="Logo"/>
      <ul>
        <li><a href="/">search</a></li>
        <li><a href="/">login/signup</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
