import * as types from '../constants/actionTypes';
// import {useDispatch} from 'react-redux';

// const dispatch = useDispatch();


// trying to add functionality to add and save collections in elephantSQL
export const addChapter = (title) => async (dispatch) => {
  console.log('this is the title', title)
  console.log('this is the dispatch', dispatch)
  try {
    await fetch('/api/addChapter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title}),
    });

    // const data = await response.json();

    const payload = {
      title,
    };

    dispatch({
      type: types.ADD_CHAPTER,
      payload,
    });
  } catch (error) {
    dispatch({
      type: types.ADD_CHAPTER,
      payload: error.message,
    });
  }
};

export const fetchData = () => async (dispatch) => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    dispatch({
      type: types.FETCH_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.FETCH_DATA_FAILURE,
      payload: error.message,
    });
  }
};
