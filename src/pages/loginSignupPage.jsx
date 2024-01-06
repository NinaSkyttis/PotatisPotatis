import React from 'react';
import logoBlack from '../img/logoblack.png';
import '../scss/_login_signup.scss';
import {Link} from 'react-router-dom';

const LoginSignupPage = () => {
  return (
    <>
      <div className="loginSignupStyle">
        <Link to="/welcome-page" className="goBackLink">
          <i className="arrow left"></i>
          Go back
        </Link>
        <div className="backgroundStyle">
          <h1>All of your favorite recipes, <br/> all in one place</h1>
          <div className="loginSignupForm">
            <form action="" >
              <img src={logoBlack} alt="" />
              {/* <input type="text" name="fullName" placeholder="Full Name"
                required/> */}
              <input type="text" name="emailAddress"
                placeholder="username" required/>
              <input type="password" name="password" placeholder="password" />
              <Link to="/my-cookbook" ><input className="formButton" type="submit"
                value="log in" /></Link>
              <h5>don't have an account? <a href="">sign up</a></h5>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignupPage;
