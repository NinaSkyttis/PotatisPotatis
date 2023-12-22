import * as types from '../constants/actionTypes';

export const addChapter = (title) => ({
  type: types.ADD_CHAPTER,
  payload: title,
});
