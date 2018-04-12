import Kary from '../lib/kary';
import * as types from '../action';

const initialState = new Kary();

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_NODE: {
      const { data, targetId } = payload;
      return state.reduce({ type: 'ADD', data, targetId });
    }
    case types.UPDATE_NODE: {
      const { data, targetId } = payload;
      return state.reduce({ type: 'UPDATE', data, targetId });
    }
    case types.REMOVE_NODE:
      return state.reduce({ type: 'REMOVE', targetId: payload });
    default:
      return state;
  }
};
