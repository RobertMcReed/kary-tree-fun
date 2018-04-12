import * as types from '.';

export const addNodeAction = (data, targetId) => ({
  type: types.ADD_NODE,
  payload: { data, targetId },
});

export const updateNodeAction = (data, targetId) => ({
  type: types.UPDATE_NODE,
  payload: { data, targetId },
});

export const removeNodeAction = (targetId) => ({
  type: types.REMOVE_NODE,
  payload: targetId,
});
