import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCookbook, fetchRecipeData} from '../actions/actions';
import {useParams} from 'react-router-dom';
import '../scss/_display_recipe.scss';

const DisplayRecipe = () => {
  const {chapterId, recipeId} = useParams();
  const dispatch = useDispatch();
  const {error, chapters, recipesInChapters, recipes} = useSelector((state) => state.potatis);
  const {image, ingredients, instructions} = useSelector((state) => state.potatis.displayRecipeData);
  const [recipe, setRecipe] = useState('');
  const [chapter, setChapter] = useState([]);
  const [url, setUrl] = useState([]);

  useEffect(() => {
    dispatch(fetchCookbook());
  }, [dispatch]);

  useEffect(() => {
    recipes.filter((recipe) => {
      if (recipe.recipeId === parseInt(recipeId, 10)) {
        setUrl(recipe.url);
        setRecipe(recipe);
      }
    });
  }, [recipes, dispatch]);

  useEffect(() => {
    dispatch(fetchRecipeData(url));
  }, [dispatch, url]);

  console.log('image, ingredients, instructions', image, ingredients, instructions);

  return (
    <div className="displayRecipe">
      <div className="displayRecipeCard">
        <img className="displayRecipeImg" src={recipe.image} alt="" />
        <h1 className="displayRecipeh1">{recipe.title}</h1>
        <ul>
          {ingredients && ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
        <ol>
          {instructions && instructions.map((step) => (
            <li>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};


export default DisplayRecipe;
