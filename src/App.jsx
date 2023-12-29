import React from 'react';
import {BrowserRouter as Router, Route, Routes, useNavigate}
  from 'react-router-dom';
import MyCookbook from './pages/MyCookbook';
import Inspiration from './pages/Inspiration';
import WelcomePage from './pages/WelcomePage';
import LoginSignupPage from './pages/loginSignupPage';
// import MyChapters from './componets/MyChapters';
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
        <Route path="/" element={<WelcomePage />} />
        <Route path="/my-cookbook" element={<MyCookbook />} />
        <Route path="/homepage" element={<WelcomePage/>} />
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
