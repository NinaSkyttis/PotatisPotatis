import * as types from '../constants/actionTypes';

export const addChapter = (title) => ({
  type: types.ADD_CHAPTER,
  payload: title,
});

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
