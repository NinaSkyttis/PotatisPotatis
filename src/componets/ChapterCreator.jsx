
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChapter } from '../actions/actions';

const ChapterCreator = (props) => {

  // const chapters = useSelector(state => state.potatisReducer.chapterList);
  const dispatch = useDispatch();


  const submitChapter = (event) => {
    event.preventDefault();
    const input = document.getElementById('new-chapter');
    dispatch(addChapter(input.value));
    input.value = '';
  }

  return (
    <div>
      <form onSubmit={submitChapter}>
        <input
        id="new-chapter"
        // value={newChapter}
        // onChange={e => updateChapter(e.target.value)}
        />
        <button id="add-chapter" className="primary" type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default ChapterCreator;