import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChapterCreator from '../componets/ChapterCreator';
import RecipeCreator from '../componets/RecipeCreator';
import RecipeDisplay from '../componets/RecipeDisplay';
import MyChapters from '../componets/MyChapters';
// import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <ChapterCreator />
      <RecipeCreator />
      <MyChapters />
      {/* <RecipeDisplay /> */}
    </div>
  );
};


export default HomePage;
