import * as types from '.';

export const addRootNodeAction = (data) => ({
  type: types.ADD_ROOT_NODE,
  payload: data,
});

export const addNodeAction = (data, targetId) => ({
  type: types.ADD_NODE,
  payload: { data, targetId },
});
