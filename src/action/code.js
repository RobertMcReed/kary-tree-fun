import * as types from '.';

export const addCodeAction = (code) => ({
  type: types.ADD_CODE,
  payload: code,
});
