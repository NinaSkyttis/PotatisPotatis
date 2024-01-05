import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChapterCreator from '../componets/ChapterCreator';
import RecipeCreator from '../componets/RecipeCreator';
// import RecipeDisplay from '../componets/RecipeDisplay';
import MyChapters from '../componets/MyChapters';
import '../scss/_my_cookbook.scss';
// import {Link} from 'react-router-dom';

const HomePage = () => {
  const showCreateChapter = () => {
    const x = document.getElementById('createChapter');
    console.log('this is x', x);
    if (x.style.display === 'none') {
      x.style.display = 'flex';
    } else {
      x.style.display = 'none';
    }
  };
  const showCreateRecipe = () => {
    const x = document.getElementById('createRecipe');
    console.log('this is x', x);
    if (x.style.display === 'none') {
      x.style.display = 'flex';
    } else {
      x.style.display = 'none';
    }
  };
  return (
    <div className="myCookbook">
      <div className="cookbookFlex">
        <div className="cookbookHeader">
          <h2>MY CHAPTERS</h2><button onClick={showCreateChapter}>+</button>
        </div>
        <button className="addRecipeButton" onClick={(showCreateRecipe)}>add recipe</button>
      </div>
      <div id="createChapter" className="createChapter" style={{display: 'none'}}>
        <ChapterCreator />
      </div>
      <div id="createRecipe" style={{display: 'none'}}>
        <RecipeCreator />
      </div>
      <MyChapters />
      {/* <RecipeDisplay /> */}
    </div>
  );
};


export default HomePage;
