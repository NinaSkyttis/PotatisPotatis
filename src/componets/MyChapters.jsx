/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCookbook} from '../actions/actions';

const MyChapters = (props) => {
  // const dispatch = useDispatch();
  // const [title, setTitle] = useState('');
  // const [url, setUrl] = useState('');
  // const [collectionId, setCollectionId] = useState('');
  // const [myRecipes, setMyRecipes] = useState([]);

  const dispatch = useDispatch();
  const {chapterList, error} = useSelector((state) => state.potatis);

  useEffect(() => {
    dispatch(fetchCookbook());
  }, [dispatch]);

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

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {chapterList &&
              chapterList.map((item) => (
                <li key={item._id}>
                  <h2>{item.title}</h2>
                </li>
              ))}

        </ul>
      )}
    </div>
  );
};

export default MyChapters;
