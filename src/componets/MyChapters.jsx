/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCookbook} from '../actions/actions';

const MyChapters = (props) => {
  const dispatch = useDispatch();
  const {error, chapters, recipesInChapters, recipes} = useSelector((state) => state.potatis);

  useEffect(() => {
    dispatch(fetchCookbook());
  }, [dispatch]);

  const chapterObj = {};

  chapters.forEach((chapter) => {
    chapterObj[chapter._id] = {
      title: chapter.title,
      recipes: [],
      chapterId: chapter._id,
    };
  });

  recipesInChapters.forEach((recipeInChapter) => {
    const {chapterIdInChapters, recipeIdInChapters} = recipeInChapter;

    const chapter = chapterObj[chapterIdInChapters];

    const recipe = recipes.find((recipe) => recipe.recipeId === parseInt(recipeIdInChapters, 10));

    if (chapter && recipe) {
      chapter.recipes.push(recipe);
    }
  });

  const chapterArr = [];
  // eslint-disable-next-line guard-for-in
  for (const key in chapterObj) {
    chapterArr.push(chapterObj[key]);
  }


  console.log('chapteArr: ', chapterArr);

  useEffect(() => {
    dispatch(fetchCookbook());
  }, [dispatch]);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {chapterArr.map((item) => (
            <li key={item.chapterId}>
              <h2>{item.title}</h2>
              <ul>
                {item.recipes.map((recipe) => (
                  <li key={recipe.recipeId}>
                    <h4>{recipe.title}</h4>
                    <a href={recipe.url}>{recipe.url}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyChapters;

// useEffect(() => {
//   fetch('/api/recipes')
//       .then((response) => response.json())
//       .then((data) => {
//         setMyRecipes(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching chapters:', error);
//       });
// }, []);

// I'm currently tryinig to iterate over chaptersObj and find the recipes that had the same Id. Store them in another object, and then display
// const chaptersObj = {};

// console.log('myrecipes, ', myRecipes);
// console.log('chapterList', chapterList);

// // input: myRecipes: [{_id: 1, title: 'Black Bean Soup', url: '123'}, {_id: 2....}]
// // input: chaptersList: [{_id: 14, title: 'ff', url: 'ff}, {id: 15, ....}]

// for (let i = 0; i < myRecipes.length; i++) {
//   console.log('recipes in mychapters', myRecipes[i]);
// }
// console.log('recipes in MyChapters', recipes);
