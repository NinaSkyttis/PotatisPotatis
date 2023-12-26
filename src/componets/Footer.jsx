/* eslint-disable max-len */
import React from 'react';
import '../scss/_navbar_footer.scss';

const Footer = (props) => {
  return (
    <nav className="nav footer">
      <ul>
        <li><a href="/">contact</a></li>
        <li><a href="/my-cookbook">about us</a></li>
        <li><a href="/">social media</a></li>
        <li><a href="/">FAQ</a></li>
      </ul>
    </nav>
  );
};

export default Footer;
