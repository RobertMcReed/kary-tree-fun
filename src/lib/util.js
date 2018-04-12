const devLog = (logFn) => (...args) =>
  (process.env.NODE_ENV === 'production' ? null : logFn(...args));

const isType = (type) => (object) => {
  const isArray = Array.isArray(object);

  if (type === 'array') return isArray;
  if (type === 'object' && isArray) return false;
  if (type === 'number' && isNaN(object)) return false;

  return typeof object === type;
};

export const isNum = isType('number');

export const isStr = isType('string');

export const isFn = isType('function');

export const isArr = isType('array');

export const isObj = isType('object');

export const log = devLog(console.log);

export const err = devLog(console.error);

export const devLogs = (prefix) => ({
  log: log.bind(null, prefix),
  err: err.bind(null, prefix),
});

export const getFromLS = key => 
  localStorage[key] || null;

export const set = type => `${type}_SET`;

export const remove = type => `${type}_REMOVE`;

export const makeActions = type => ({
  set: (payload) => ({
    type: set(type),
    payload,
  }),
  remove: () => ({
    type: remove(type),
    payload: null,
  }),
});

export const cleanString = str => str.replace(/ /g, '').toLowerCase();
