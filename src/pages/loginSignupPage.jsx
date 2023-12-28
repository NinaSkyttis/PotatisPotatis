import React from 'react';
import logoBlack from '../img/logoblack.png';
import '../scss/_login_signup.scss'

const LoginSignupPage = () => {
  return (
    <>
      <section className="loginSignupStyle">
        <div className="backgroundStyle">
          <h2>All of your favorite recipes, all in one place</h2>
        </div>
        <div className="loginSignupForm">
          <form action="">
            <img src={logoBlack} alt="" />
            <input type="text" name="fullName" placeholder="Full Name"/>
            <input type="text" name="emailAddress"
              placeholder="Email Address" />
            <input type="text" name="password" placeholder="Password" />
            <input className="formButton" type="submit" value="Create Account"/>
            <h5>Already have an account? <a href="">Login</a></h5>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginSignupPage;
