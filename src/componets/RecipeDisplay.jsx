/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRecipes} from '../actions/actions';

const RecipeDisplay = (props) => {
  const dispatch = useDispatch();
  const {recipeList, error} = useSelector((state) => state.potatis);
  //   console.log('by this point all is good: ', state.potatis);

  // eslint-disable-next-line no-unused-vars
  const [imageUrls, setImageUrls] = useState([]);


  // useEffect(() => {
  //   dispatch(fetchRecipes());
  // }, [dispatch]);

  useEffect(() => {
    if (!recipeList || recipeList.length === 0) {
      dispatch(fetchRecipes());
    }
  }, [dispatch, recipeList]);


  // eslint-disable-next-line no-unused-vars
  const getImage = (url) => {
    const imgTags = document.getElementsByTagName('img');
    return imgTags[0];
  };
  console.log('recipeslist in recipedisplay: ', recipeList)
  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {recipeList && recipeList.map((item) => (
            <li key={item.recipe._id}>
              <p>{item.recipe.title}</p>
              {/* {item.url && <img src={getImage(item.url)} alt={`Image for ${item.title}`} />} */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeDisplay;
