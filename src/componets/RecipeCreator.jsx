import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Dropdown from 'react-dropdown';
import {addRecipe} from '../actions/actions';
import 'react-dropdown/style.css';

const RecipeCreator = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [chapterId, setChapterId] = useState('');
  const {chapters} = useSelector((state) => state.potatis);

  const submitRecipe = async (event) => {
    event.preventDefault();
    // console.log('title, url, chapterId --> ', title, url, chapterId);
    const inputTitle = document.getElementById('title');
    const inputimage = document.getElementById('image');
    const inputUrl = document.getElementById('url');
    await dispatch(addRecipe(inputTitle.value, inputimage.value, inputUrl.value, chapterId));

    setTitle('');
    setImage('');
    setUrl('');
    setChapterId('');
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

  return (
    <div className="createRecipe">
      <form onSubmit={submitRecipe}>
        <label htmlFor="title">Add New Recipe</label>
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
          placeholder="Image"
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
          id="recipechapterId"
          options={chapterOptionsDropdown}
          onChange={handleDropdownChange}
          value={''}
          selected={chapterId}
          placeholder="Select Chapter"
        />

        <input className="button" type="submit" value="Add Recipe" />
      </form>
    </div>
  );
};

export default RecipeCreator;
