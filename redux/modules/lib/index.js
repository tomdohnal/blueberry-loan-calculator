// creates a reducer for calculator fields
export const createFieldReducer = ({
  SET_VALUE_ACTION_TYPE, SET_CONFIG_ACTION_TYPE,
}) => (state = {}, action) => {
  switch (action.type) {
  case SET_VALUE_ACTION_TYPE:
    return { ...state, value: action.payload };
  case SET_CONFIG_ACTION_TYPE:
    return { ...action.payload };
  default:
    return state;
  }
};

// creates a value setter function for calculator fields
export const createFieldValueSetter = ({ ACTION_TYPE }) => value => ({
  type: ACTION_TYPE,
  payload: value,
});
