import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCookbook} from '../actions/actions';
import {useParams} from 'react-router-dom';

// import '.././index.scss';

const DisplayChapter = () => {
  const {chapterId} = useParams();
  const dispatch = useDispatch();
  const {error, chapters, recipesInChapters, recipes} = useSelector((state) => state.potatis);
  const [finalRecipes, setFinalRecipes] = useState([]);
  const [chapter, setChapter] = useState([]);

  useEffect(() => {
    dispatch(fetchCookbook());
  }, [dispatch]);

  const recipeIdArr = [];
  // console.log('chapters', chapters);
  // console.log('chapterid:', chapterId);


  useEffect(() => {
    chapters.filter((chapter) => {
      // console.log(typeof chapterId === 'string');
      // console.log(typeof chapter._id === 'string');
      if (chapter._id === parseInt(chapterId, 10)) {
        console.log('found!');
        setChapter(chapter);
      }
    });
    recipesInChapters.filter((recipe) => {
      if (recipe.chapterIdInChapters === chapterId) {
        recipeIdArr.push(recipe.recipeIdInChapters);
      }
    });

    const finalRecipeArr = [];

    recipes.filter((recipe) => {
      if (recipeIdArr.includes(recipe.recipeId.toString())) {
        finalRecipeArr.push(recipe);
      }
    });
    setFinalRecipes(finalRecipeArr);
  }, [chapters, recipesInChapters, recipes]);

  console.log(finalRecipes, 'finale');
  console.log(chapter, 'chapter');

  return (
    <div className="myCookbook myCookBookChapter">
      {chapter && <h1>{chapter.title}</h1>}
      <ul className="recipeListInChapter" >
        {
          finalRecipes && finalRecipes.map((recipe) => (
            <li className="recipeListInChapter" key={recipe.recipeId} >
              <img src={recipe.image} alt="" />
              <h4>{recipe.title}</h4>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default DisplayChapter;

