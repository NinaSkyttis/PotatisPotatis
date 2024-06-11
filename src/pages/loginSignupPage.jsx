import React, {useState, useEffect} from 'react';
import logoBlack from '../img/logoblack.png';
import '../scss/_login_signup.scss';
import {Link} from 'react-router-dom';
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';

const LoginSignupPage = () => {
  const [googleIdToken, setGoogleIdToken] = useState(null);
  useEffect(() => {
    fetch('/api/chapters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({googleIdToken}),
    })
        .then((response) => {
          console.log(response);
        });
  }, [googleIdToken]);
  return (
    <>
      <div className="loginSignupStyle">
        <Link to="/my-cookbook" className="goBackLink">
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
                placeholder="Username" required/>
              <input type="password" name="password" placeholder="Password" />
              <Link to="/my-cookbook" >
                <input className="formButton" type="submit"
                  value="Log In" />
              </Link>
              <GoogleOAuthProvider
                clientId=
                  // eslint-disable-next-line max-len
                  "681709519182-a2ge49ge9s14l122ag78f20f78dv4utj.apps.googleusercontent.com"
              >
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    // console.log(credentialResponse);
                    // This is the ID token!
                    const idToken = credentialResponse.credential;
                    setGoogleIdToken(idToken);
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </GoogleOAuthProvider>
              <h5>Don't have an account? <a href="">Sign Up</a></h5>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignupPage;
