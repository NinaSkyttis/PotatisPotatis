import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Inspiration from './pages/Inspiration';
import WelcomePage from './pages/WelcomePage'
// import CookbookDisplay from './componets/CookbookDisplay';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
// import {store} from '../store.js';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage/>} />
          <Route path="/inspiration" element={<Inspiration/>} />
          <Route path="/welcome-page" element={<WelcomePage />} />
        </Routes>
        <Footer/>
      </Router>
    </div>

  // <div>
  //   <Navbar/>
  //   <ChapterCreator/>
  //   <CookbookDisplay/>
  //   <RecipeDisplay/>
  //   <Footer/>
  // </div>
  );
};

export default App;
