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

export const addRecipe = (title, url, chapterId) => async (dispatch) => {
  try {
    await fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, url, chapterId}),
    });

    const payload = {
      title,
      url,
      chapterId,
    };

    await dispatch({
      type: types.ADD_RECIPE_SUCCESS,
      payload,
    });

    dispatch(fetchCookbook());
  } catch (error) {
    dispatch({
      type: types.ADD_RECIPE_FAILURE,
      payload: error.message,
    });
  }
};

export const updateRecipe = (recipeIdToEdit, title, url, chapterId) =>
  async (dispatch) => {
    try {
      await fetch(`/api/recipes/${recipeIdToEdit}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title, url, chapterId}),
      });

      const payload = {
        recipeIdToEdit,
        title,
        url,
        chapterId,
      };

      await dispatch({
        type: types.UPDATE_RECIPE_SUCCESS,
        payload,
      });

      dispatch(fetchCookbook());
    } catch (error) {
      dispatch({
        type: types.UPDATE_RECIPE_FAILURE,
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
    const data = await response.json();
    // console.log(chapters, 'chapters in fetchCookbook');
    dispatch({
      type: types.FETCH_COOKBOOK_SUCCESS,
      payload: {
        chapters: data.chapters,
        recipesInChapters: data.recipesInChapters,
        recipes: data.recipes,
      },
    });
  } catch (error) {
    dispatch({
      type: types.FETCH_COOKBOOK_FAILURE,
      payload: error.message,
    });
  }
};

export const startEditingRecipe = (recipeId) => ({
  type: 'START_EDIT_RECIPE',
  payload: {recipeId},
});

export const stopEditrecipe = () => ({
  type: 'STOP_EDIT_RECIPE',
});
