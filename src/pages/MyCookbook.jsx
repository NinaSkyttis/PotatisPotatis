import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChapterCreator from '../componets/ChapterCreator';
import RecipeDisplay from '../componets/RecipeDisplay';
import MyChapters from '../componets/MyChapters';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
// import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <ChapterCreator />
      <MyChapters />
      <RecipeDisplay />
    </div>
  );
};


export default HomePage;
