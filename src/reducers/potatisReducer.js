// import {createSlice} from '@reduxjs/toolkit';
import * as types from '../constants/actionTypes';

const initialState = {
  totalCollections: 0,
  totalChapters: 0,
  chapterList: [],
  recipeList: [],
  lastChapterId: 0,
  newChapter: '',
};

const potatisReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CHAPTER:
      console.log('action.payload', action.payload);
      return {
        ...state,
        chapterList: [
          ...state.chapterList,
          {
            id: state.lastChapterId + 1,
            title: action.payload.title,
            recipes: 0,
          },
        ],
        lastChapterId: state.lastChapterId + 1,
        totalChapters: state.totalChapters + 1,
      };
    case types.FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipeList: [
          ...state.recipeList,
          ...action.payload.map((recipe) => ({
            recipe,
            error: null,
          })),
        ],
      };
    case types.FETCH_RECIPES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default potatisReducer;
