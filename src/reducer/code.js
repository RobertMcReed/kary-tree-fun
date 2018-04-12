import * as types from '../action';

const initialState = '';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_CODE:
      return payload;
    default:
      return state;
  }
};
