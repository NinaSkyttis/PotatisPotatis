import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCookbook} from '../actions/actions';
import {useParams} from 'react-router-dom';
import '../scss/_display_recipe.scss'

const DisplayRecipe = () => {
  const {chapterId, recipeId} = useParams();
  const dispatch = useDispatch();
  const {error, chapters, recipesInChapters, recipes} = useSelector((state) => state.potatis);
  const [recipe, setRecipe] = useState('');
  const [chapter, setChapter] = useState([]);

  useEffect(() => {
    dispatch(fetchCookbook());
  }, [dispatch]);

  console.log(recipes);
  useEffect(() => {
    recipes.filter((recipe) => {
      if (recipe.recipeId === parseInt(recipeId, 10)) {
        setRecipe(recipe);
      }
    });
  }, [recipes, dispatch]);

 
  return (
    <div className="displayRecipe">
      <div className="displayRecipeCard">
      <img className="displayRecipeImg" src={recipe.image} alt="" />
      <h1 className="displayRecipeh1">{recipe.title}</h1>
      </div>
    </div>
  );
};


export default DisplayRecipe;
