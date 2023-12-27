import * as types from '../constants/actionTypes';

export const addChapter = (title) => async (dispatch) => {
  try {
    await fetch('/api/chapters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title}),
    });

    const payload = {
      title,
    };

    dispatch({
      type: types.ADD_CHAPTER,
      payload,
    });
  } catch (error) {
    dispatch({
      type: types.ADD_CHAPTER_FAILURE,
      payload: error.message,
    });
  }
};


export const fetchRecipes = () => async (dispatch) => {
  try {
    const response = await fetch('/api/recipes');
    const recipes = await response.json();
    dispatch({
      type: types.FETCH_RECIPES_SUCCESS,
      payload: recipes,
    });
  } catch (error) {
    dispatch({
      type: types.FETCH_RECIPES_FAILURE,
      payload: error.message,
    });
  }
};

export const fetchCookbook = () => async (dispatch) => {
  try {
    const response = await fetch('/api/chapters');
    const chapters = await response.json();
    console.log(chapters, 'chapters in fetchCookbook')
    dispatch({
      type: types.FETCH_COOKBOOK_SUCCESS,
      payload: chapters,
    });
  } catch (error) {
    dispatch({
      type: types.FETCH_COOKBOOK_FAILURE,
      payload: error.message,
    });
  }
};
