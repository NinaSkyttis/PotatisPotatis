import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-dropdown';
import { addRecipe } from '../actions/actions';
import 'react-dropdown/style.css';

const RecipeCreator = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [collectionId, setCollectionId] = useState('');
  const { chapters } = useSelector((state) => state.potatis);

  const updateRecipe = async (event) => {
    event.preventDefault();
    // console.log('title, url, collectionId --> ', title, url, collectionId);
    const inputTitle = document.getElementById('title');
    const inputUrl = document.getElementById('url');
    await dispatch(updateRecipe(inputTitle.value, inputUrl.value, collectionId));

    setTitle('');
    setUrl('');
    setCollectionId('');
  };

  const handleDropdownChange = (selectedOption) => {
    setCollectionId(selectedOption.value);
  };
  // let newChapterOptions = chapterOptions.chapters;
  // console.log(chapterOptions, 'newChapterOptions');

  const chapterOptionsDropdown = chapters.map((chapter) => ({
    value: chapter._id,
    label: chapter.title,
  }));

  return (
    <div className="createRecipe">
      <form onSubmit={updateRecipe}>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Url"
          required
        />

        {/* Dropdown for collectionId */}
        <Dropdown
          id="recipeCollectionId"
          options={chapterOptionsDropdown}
          onChange={handleDropdownChange}
          value={''}
          selected={collectionId}
          placeholder="Select Chapter"
        />

        <input className="button" type="submit" value="Add Recipe" />
      </form>
    </div>
  );
};

export default RecipeCreator;
