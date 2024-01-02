/* eslint-disable max-len */
// import {createSlice} from '@reduxjs/toolkit';
import * as types from '../constants/actionTypes';

const initialState = {
  totalCollections: 0,
  totalChapters: 0,
  chapters: [],
  recipeList: [],
  recipesInChapters: [],
  recipes: [],
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
            url: action.payload.url,
            collectionId: action.payload.collectionId,
          },
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
          title: recipe.title,
          url: recipe.url,
        })),

      };
    case types.FETCH_COOKBOOK_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default potatisReducer;
