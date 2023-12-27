import React from 'react';
import ChapterCreator from './componets/ChapterCreator';
import RecipeDisplay from './componets/RecipeDisplay';
import CookbookDisplay from './componets/CookbookDisplay';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
// import {store} from '../store.js';


const App = () => {
  return (
    <div>
      <Navbar/>
      <ChapterCreator/>
      <CookbookDisplay/>
      <RecipeDisplay/>
      <Footer/>
    </div>
  );
};

export default App;
