import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Dropdown from 'react-dropdown';
import {updateRecipe, deleteRecipe} from '../actions/actions';
import '../scss/_my_cookbook.scss';
import 'react-dropdown/style.css';

const RecipeEditor = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [image, setImage] = useState('');
  const [foundRecipe, setFoundRecipe] = useState('');
  const [chapterId, setChapterId] = useState('');
  const [comments, setComments] = useState('');
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
      setImage(foundRecipe.image);
      setUrl(foundRecipe.url);
      setChapterId(foundRecipe.chapterId);
      setComments(foundRecipe.comments);
    }
  }, [recipeIdToEdit, recipes]);

  const deleteRecipeHandler = async (event) => {
    // checking if recipeIdToEdit actually exists
    if (!recipeIdToEdit) {
      return;
    }
    // event.preventDefault();
    await dispatch(deleteRecipe(recipeIdToEdit));

    setTitle('');
    setImage('');
    setUrl('');
    setChapterId('');
    setComments('')
  };


  const updateRecipeHandler = async (event) => {
    event.preventDefault();

    if (!chapterId) {
      alert('Please select a chapter');
      return;
    }
    // console.log('title, url, chapterId --> ', title, url, chapterId);
    // const inputTitle = document.getElementById('title');
    // const inputUrl = document.getElementById('url');
    await dispatch(updateRecipe(recipeIdToEdit, title, image, url, chapterId, comments));

    setTitle('');
    setImage('');
    setUrl('');
    setChapterId('');
    setComments('');
  };

  const handleDropdownChange = (selectedOption) => {
    setChapterId(selectedOption.value);
  };
  // let newChapterOptions = chapterOptions.chapters;
  // console.log(chapterOptions, 'newChapterOptions');

  const chapterOptionsDropdown = chapters.map((chapter) => ({
    value: chapter._id,
    label: chapter.title,
  }));
  // console.log('comments,',comments)
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
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Link to Image"
          required
        />
        <input
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Url"
          required
        />
        <input
          id="comments"
          defaultValue={comments.toLowerCase()}
          onChange={(e) => setComments(e.target.value)}
          placeholder="comments"
          required
        />

        {/* Dropdown for chapterId */}
        <Dropdown
          id="editChapterId"
          options={chapterOptionsDropdown}
          onChange={handleDropdownChange}
          value={''}
          selected={chapterId}
          placeholder="select chapter"
        />

        <input
          className="button editButton"
          type="submit"
          value="update recipe"
        />
        <input
          type="button editButton"
          value="delete recipe"
          id="deleteButton"
          onClick={() => deleteRecipeHandler()}
        />
      </form>
    </div>
  );
};

export default RecipeEditor;
