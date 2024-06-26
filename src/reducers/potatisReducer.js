/* eslint-disable max-len */
// import {createSlice} from '@reduxjs/toolkit';
import * as types from '../constants/actionTypes';

const initialState = {
  totalCollections: 0,
  totalChapters: 0,
  chapters: [],
  // recipeList: [],
  recipesInChapters: [],
  displayRecipeData: {},
  recipes: [],
  editingRecipeId: null,
  lastChapterId: 0,
  newChapter: '',
};

const potatisReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CHAPTER:
      return {
        ...state,
        chapters: [
          ...state.chapters,
          {
            _id: state.lastChapterId + 1,
            title: action.payload.title,
            recipes: 0,
          },
        ],
        lastChapterId: state.lastChapterId + 1,
        totalChapters: state.totalChapters + 1,
      };
    case types.ADD_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: [
          ...state.recipes,
          {
            title: action.payload.title,
            image: action.payload.image,
            url: action.payload.url,
            chapterId: action.payload.chapterId,
            comments: action.payload.comments,
          },
        ],
      };
    case types.START_EDIT_RECIPE:
      return {
        ...state,
        editingRecipeId: action.payload,
      };
    case types.STOP_EDIT_RECIPE:
      return {
        ...state,
        editingRecipeId: null,
      };
    case types.UPDATE_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: [
          ...state.recipes.filter((el) => el._id === action.payload.recipeId),
          {
            title: action.payload.title,
            url: action.payload.url,
            chapterId: action.payload.chapterId,
          },
        ],
      };
    case types.DELETE_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: [
          ...state.recipes.map((el) => el._id !== action.payload.recipeToDelete),
        ],
      };
    case types.FETCH_COOKBOOK_SUCCESS:
      return {
        ...state,
        chapters: action.payload.chapters.map((chapter) => ({
          _id: chapter._id,
          title: chapter.title,
        })),
        recipesInChapters: action.payload.recipesInChapters.map((chapARec) => ({
          chapterIdInChapters: chapARec.chapter_id,
          recipeIdInChapters: chapARec.recipe_id,
        })),
        recipes: action.payload.recipes.map((recipe) => ({
          recipeId: recipe._id,
          image: recipe.image,
          title: recipe.title,
          url: recipe.url,
          comments: recipe.comments,
        })),
      };
    case types.FETCH_COOKBOOK_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case types.FETCH_URL_DATA_SUCCESS:
      return {
        ...state,
        displayRecipeData: {
          image: action.payload.image,
          ingredients: action.payload.ingredients,
          instructions: action.payload.instructions,
          comments: action.payload.comments,
        },
      };
    case types.FETCH_URL_DATA_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case types.UPDATE_RECIPES_TO_DISPLAY:
      return {
        ...state,
        recipesToDisplay: {
          ...state.recipesToDisplay,
          chapterId: action.payload.chapterId,
          recipes: action.payload.recipes,
        },
      };
    default:
      return state;
  }
};

export default potatisReducer;
