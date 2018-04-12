import { isFn } from '../lib/util';

export default (store) => (next) => (action) =>
  (isFn(action) ? action(store) : next(action));
