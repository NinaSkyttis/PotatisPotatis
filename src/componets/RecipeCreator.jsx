import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Dropdown from 'react-dropdown';
import {addRecipe} from '../actions/actions';
import 'react-dropdown/style.css';

const RecipeCreator = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [collectionId, setCollectionId] = useState('');
  const [chapterOptions, setChapterOptions] = useState([]);

  // Fetch chapters from the database on component mount
  useEffect(() => {
    // Replace the following with your actual API endpoint to fetch chapters
    fetch('/api/chapters')
        .then((response) => response.json())
        .then((data) => {
        // Assuming data is an array of chapters, update the options
          setChapterOptions(data.chapters);
        })
        .catch((error) => {
          console.error('Error fetching chapters:', error);
        });
  }, []); // Empty dependency array ensures the effect runs only once on mount


  const submitRecipe = async (event) => {
    event.preventDefault();
    console.log('title, url, collectionId --> ', title, url, collectionId);
    await dispatch(addRecipe(title, url, collectionId));

    setTitle('');
    setUrl('');
    setCollectionId('');
  };

  const handleDropdownChange = (selectedOption) => {
    setCollectionId(selectedOption.value);
  };
  // let newChapterOptions = chapterOptions.chapters;
  // console.log(chapterOptions, 'newChapterOptions');

  const chapterOptionsDropdown = chapterOptions.map((chapter) => ({
    value: chapter._id,
    label: chapter.title,
  }));

  return (
    <div>
      <form onSubmit={submitRecipe}>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
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
