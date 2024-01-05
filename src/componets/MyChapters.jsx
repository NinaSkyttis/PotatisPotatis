/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCookbook} from '../actions/actions';
import RecipeEditor from '../componets/RecipeEditor';
import {Link, useParams} from 'react-router-dom';
import * as types from '../constants/actionTypes';
import '../scss/_my_cookbook.scss';

const MyChapters = (props) => {
  const dispatch = useDispatch();
  const {error, chapters, recipesInChapters, recipes} = useSelector((state) => state.potatis);
  const [editingRecipeId, setEditingRecipeId] = useState(null);
  const {chapterId} = useParams();

  // const [stopEditingRecipeId, setStopEditingRecipeId] = useState(null);
  // const [chapter, setChapter] = useState(null);
  const [count, setCount] = useState(0);
  // const editingRecipeId = useSelector((state) => state.editingRecipeId);

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

  useEffect(() => {
    dispatch(fetchCookbook());
  }, [dispatch]);

  const showUpdateRecipe = (recipeId) => {
    if (count % 2 === 0) {
      setEditingRecipeId(recipeId);

      dispatch({
        type: types.START_EDIT_RECIPE,
        payload: recipeId,
      });

      console.log('after setEditingRecipeId: count is', count, 'and recipeId is', recipeId);
    } else {
      setEditingRecipeId(null);
      console.log('after setEditingRecipeId: count is', count, 'and recipeId is', recipeId);
      setCount(0);
    }
    setCount(count + 1);
  };

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
          <ul className="chaptersList">
            {chapterArr.map((item) => (
              <li key={item.chapterId}>
                <div className="chapter">
                  <h2>{item.title}</h2>
                  <Link className="transition" to={`/my-cookbook/chapters/${item.chapterId}`}>
                    go to chapter
                  </Link>
                </div>
                <ul className="recipeListInChapter">
                  {item.recipes.map((recipe) => (
                    <div className="recipeAndEdit" key={recipe.recipeId}>
                      <li
                        id='hideRecipe'
                        className="recipeListInChapter"
                        key={recipe.recipeId}
                        style={{display: editingRecipeId === recipe.recipeId ? 'none' : 'flex'}}
                      >
                        <Link
                          style={{width: '100%'}}
                          key={recipe.recipeId}
                          to={`/my-cookbook/chapters/${item.chapterId}/${recipe.recipeId}`}
                        >
                          <img src={recipe.image} alt="" />
                        </Link>
                        <h4>{recipe.title}</h4>
                        <a style={{display: 'none'}} href={recipe.url}>{recipe.url}</a>
                        <div className="recipeButtons">
                          <button
                            className="edit"
                            id={recipe.recipeId}
                            onClick={() => {
                              showUpdateRecipe(recipe.recipeId);
                            }}>
                            edit
                          </button>
                          <button className="view">
                            view
                          </button>
                        </div>
                      </li>
                      {editingRecipeId === recipe.recipeId && (
                        <div id="updateRecipe" style={{display: editingRecipeId === null ? 'none' : 'flex'}}>
                          <li className="recipeListInChapter">
                            <button className="goBackEditRecipe" onClick={
                              () => {
                                showUpdateRecipe();
                              }
                            }>Go back</button>
                            <RecipeEditor />
                          </li>
                        </div>
                      )}
                    </div>
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
