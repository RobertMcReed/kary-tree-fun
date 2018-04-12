import Kary from '../lib/kary';

const initialState = new Kary();

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_ROOT_NODE':
      return state.addFirstNode(payload);
    case 'ADD_NODE': {
      const { data, targetId } = payload;
      return state.reduce({ type: 'ADD', data, targetId });
    }
    default:
      return state;
  }
};
