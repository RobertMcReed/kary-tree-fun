import { combineReducers } from 'redux';

import tree from './tree';
import code from './code';

export default combineReducers({
  tree,
  code,
});
