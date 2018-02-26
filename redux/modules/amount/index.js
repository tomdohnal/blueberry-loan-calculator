export const ACTION_TYPES = {
  SET_VALUE: 'AMOUNT.SET_VALUE',
  SET_CONFIG: 'AMOUNT.SET_CONFIG',
};

export const setValue = value => ({
  type: ACTION_TYPES.SET_VALUE,
  payload: value,
});

export default (state = {}, action) => {
  switch (action.type) {
  case ACTION_TYPES.SET_VALUE:
    return { ...state, value: action.payload };
  case ACTION_TYPES.SET_CONFIG:
    return { ...action.payload };
  default:
    return state;
  }
};
