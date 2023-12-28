import React from 'react';
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Inspiration from './pages/Inspiration';
import WelcomePage from './pages/WelcomePage';
import LoginSignupPage from './pages/loginSignupPage';
// import CookbookDisplay from './componets/CookbookDisplay';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
// import {store} from '../store.js';


const Navigation = () => {
  useNavigate();

  const isLoginSignupPage = () => {
    return location.pathname === '/login-signup';
  };

  return (
    <div>
      {!isLoginSignupPage() && <Navbar/>}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage/>} />
        <Route path="/inspiration" element={<Inspiration/>} />
        <Route path="/welcome-page" element={<WelcomePage />} />
        <Route path="/login-signup" element={<LoginSignupPage />} />
      </Routes>
      {!isLoginSignupPage() && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navigation/>
    </Router>
  );
};

export default App;
