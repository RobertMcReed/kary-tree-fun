import { log, err, isFn } from '../lib/util';

export default (store) => (next) => (action) => {
  try {
    if (!isFn(action)) log('__ACTION__', action);
    else log('__ACTION_CREATOR__', action.name);
    
    const result = next(action);
    log('__STATE__', store.getState());

    return result;
  } catch (error) {
    err('__ERROR__', error);
    
    return { ...action, error };
  }
};
