import { createFieldReducer, createFieldValueSetter } from '../lib';

export const ACTION_TYPES = {
  SET_VALUE: 'TERM.SET_VALUE',
  SET_CONFIG: 'TERM.SET_CONFIG',
};

export const setValue = createFieldValueSetter({ ACTION_TYPE: ACTION_TYPES.SET_VALUE });

export default createFieldReducer({
  SET_VALUE_ACTION_TYPE: ACTION_TYPES.SET_VALUE,
  SET_CONFIG_ACTION_TYPE: ACTION_TYPES.SET_CONFIG,
});
