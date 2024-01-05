import React from 'react';
import {Route, Routes, useNavigate}
  from 'react-router-dom';
// import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import MyCookbook from './pages/MyCookbook';
import Inspiration from './pages/Inspiration';
import WelcomePage from './pages/WelcomePage';
import LoginSignupPage from './pages/loginSignupPage';
import DisplayChapter from './pages/DisplayChapter';
import DisplayRecipe from './pages/DisplayRecipe';
// import MyChapters from './componets/MyChapters';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
// import {store} from '../store.js';


const Navigation = () => {
  useNavigate();

  const isLoginSignupPage = () => {
    return window.location.hash.startsWith('#/login-signup');
  };

  return (
    <div>
      {/* <Router> */}
      {!isLoginSignupPage() && <Navbar/>}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/my-cookbook" element={<MyCookbook />} />
        <Route path="/my-cookbook/chapters/:chapterId" element={<DisplayChapter />} />
        <Route path="/my-cookbook/chapters/:chapterId/:recipeId" element={<DisplayRecipe />} />
        <Route path="/homepage" element={<WelcomePage/>} />
        <Route path="/inspiration" element={<Inspiration/>} />
        <Route path="/welcome-page" element={<WelcomePage />} />
        <Route path="/login-signup" element={<LoginSignupPage />} />
      </Routes>
      {!isLoginSignupPage() && <Footer />}
      {/* </Router> */}
    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* <HashRouter> */}
        <Navigation />
      {/* </HashRouter> */}
    </div>
  );
};

export default App;
