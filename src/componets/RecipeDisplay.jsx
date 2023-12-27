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


  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const getImage = (url) => {
    const imgTags = document.getElementsByTagName('img');
    return imgTags[0];
  }

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