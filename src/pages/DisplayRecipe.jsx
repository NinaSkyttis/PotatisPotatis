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
  const [comments, setComments] = useState(null);
  const [url, setUrl] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(fetchCookbook());
  }, [dispatch]);

  useEffect(() => {
    recipes.filter((recipe) => {
      if (recipe.recipeId === parseInt(recipeId, 10)) {
        console.log(recipe.url, 'recipe.url');
        setUrl(recipe.url);
        setRecipe(recipe);
        if (recipe.comments !== 'Add Comment') {
          setComments(recipe.comments);
        }
      }
    });
  }, [recipes, dispatch]);

  function displayComments() {
    return comments ? true : false;
  }

  useEffect(() => {
    dispatch(fetchRecipeData(url));
  }, [dispatch, url]);

  console.log('image, ingredients, instructions', image, ingredients, instructions);

  return (
    <div className="displayRecipe">
      <div className="displayRecipeCard">
        <h1 className="displayRecipeh1">{recipe.title}</h1>
        <img className="displayRecipeImg" src={recipe.image} alt="" />
        <a className="originalRecipe" href={url}>Find original recipe here</a>
        { displayComments() ? (
            <p className = "notes"><strong>Notes: </strong>{recipe.comments}</p>
        ) : (
            <p style={{display: 'none'}} className="notes"><strong>Notes: </strong>{recipe.comments}</p>
        )}
        <ul className="list">
          <h4>Ingredients</h4>
          {ingredients && ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
        <ol className="list">
          <h4>Instructions</h4>
          {instructions && instructions.map((step) => (
            <li>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};


export default DisplayRecipe;
