import React from 'react';
import {useDispatch} from 'react-redux';
import {addChapter} from '../actions/actions';

const ChapterCreator = (props) => {
  const dispatch = useDispatch();

  const submitChapter = async (event) => {
    event.preventDefault();

    // Ensure you are getting the correct value from the input field
    const input = document.getElementById('new-chapter');
    const title = input.value;

    // Call the addChapter action with the correct title
    await dispatch(addChapter(title));

    // Clear the input after submission
    input.value = '';
  };

  return (
    <div>
      <form onSubmit={submitChapter}>
        <input id="new-chapter" required/>
        <input className="button" type="submit" value="Create Account"/>
      </form>
    </div>
  );
};

export default ChapterCreator;
