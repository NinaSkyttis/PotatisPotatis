import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-dropdown';
import {updateRecipe} from '../actions/actions';
import '../scss/_my_cookbook.scss';
import 'react-dropdown/style.css';

const RecipeEditor = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [foundRecipe, setFoundRecipe] = useState('');
  const [chapterId, setchapterId] = useState('');
  const {chapters} = useSelector((state) => state.potatis);
  const recipes = useSelector((state) => state.potatis.recipes);
  const recipeIdToEdit = useSelector((state) => state.potatis.editingRecipeId);
  // console.log(recipe, 'recipe in updateRecipe');
  console.log(recipeIdToEdit, 'recipeIdToEdit');

  useEffect(() => {
    const foundRecipe = recipes.find((el) => el.recipeId === recipeIdToEdit);
    if (foundRecipe) {
      setFoundRecipe(foundRecipe);
      setTitle(foundRecipe.title);
      setUrl(foundRecipe.url);
      setchapterId(foundRecipe.chapterId);
    }
  }, [recipeIdToEdit, recipes]);


  const updateRecipeHandler = async (event) => {
    event.preventDefault();

    if (!chapterId) {
      alert('Please select a chapter');
      return;
    }
    // console.log('title, url, chapterId --> ', title, url, chapterId);
    // const inputTitle = document.getElementById('title');
    // const inputUrl = document.getElementById('url');
    await dispatch(updateRecipe(recipeIdToEdit, title, url, chapterId));

    setTitle('');
    setUrl('');
    setchapterId('');
  };

  const handleDropdownChange = (selectedOption) => {
    setchapterId(selectedOption.value);
  };
  // let newChapterOptions = chapterOptions.chapters;
  // console.log(chapterOptions, 'newChapterOptions');

  const chapterOptionsDropdown = chapters.map((chapter) => ({
    value: chapter._id,
    label: chapter.title,
  }));

  return (
    <div className="editRecipe">
      <form className="editRecipe" onSubmit={updateRecipeHandler}>
        {/* <label htmlFor="title">{}</label> */}
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

        {/* Dropdown for chapterId */}
        <Dropdown
          id="editChapterId"
          options={chapterOptionsDropdown}
          onChange={handleDropdownChange}
          value={''}
          selected={chapterId}
          placeholder="Select Chapter"
        />

        <input className="button" type="submit" value="Update Recipe" />
      </form>
    </div>
  );
};

export default RecipeEditor;
