import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChapterCreator from '../componets/ChapterCreator';
import RecipeCreator from '../componets/RecipeCreator';
import RecipeDisplay from '../componets/RecipeDisplay';
import MyChapters from '../componets/MyChapters';
import '../scss/_my_cookbook.scss';
// import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="myCookbook">
      <h2>MY CHAPTERS</h2>
      <div className="create">
        <ChapterCreator />
        <RecipeCreator />
      </div>
      <MyChapters />
      {/* <RecipeDisplay /> */}
    </div>
  );
};


export default HomePage;
