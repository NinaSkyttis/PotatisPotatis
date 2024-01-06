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

export const addRecipe = (title, image, url, chapterId) => async (dispatch) => {
  try {
    await fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, image, url, chapterId}),
    });

    const payload = {
      title,
      image,
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

export const updateRecipe = (recipeIdToEdit, title, image, url, chapterId) =>
  async (dispatch) => {
    try {
      await fetch(`/api/recipes/${recipeIdToEdit}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title, image, url, chapterId}),
      });

      const payload = {
        recipeIdToEdit,
        title,
        image,
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

export const deleteRecipe = (recipeToDelete) => async (dispatch) => {
  console.log('all good for now')
  try {
    await fetch(`/api/recipes/${recipeToDelete}`, {
      method: 'DELETE',
    });
    await dispatch({
      type: types.DELETE_RECIPE_SUCCESS,
      payload: recipeToDelete,
    });
    dispatch(fetchCookbook());
  } catch (error) {
    dispatch({
      type: types.DELETE_RECIPE_FAILURE,
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

export const fetchRecipeData = (url) => async (dispatch) => {
  const response = await fetch(`/api/getRecipeData/${url}`);
  const data = await response.json();
  console.log(data, 'data from url get request in action creator');
  try {
    dispatch({
      type: types.FETCH_URL_DATA_SUCCESS,
      payload: {
        image: data.image,
        ingredients: data.ingredients,
        instructions: data.instructions,
      },
    });
  } catch (error) {
    console.log('this is the error: ', error);
    dispatch({
      type: types.FETCH_URL_DATA_FAILURE,
      payload: error.message,
    });
  }
}

export const updateRecipesToDisplay = (chapterId, recipes) => ({
  type: types.UPDATE_RECIPES_TO_DISPLAY,
  payload: {
    chapterId,
    recipes,
  },
});

export const startEditingRecipe = (recipeId) => ({
  type: 'START_EDIT_RECIPE',
  payload: {recipeId},
});

export const stopEditrecipe = () => ({
  type: 'STOP_EDIT_RECIPE',
});
