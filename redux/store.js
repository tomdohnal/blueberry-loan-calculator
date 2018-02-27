import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { api } from '../lib';
import termReducer, { ACTION_TYPES as TERM_ACTION_TYPES } from './modules/term';
import amountReducer, { ACTION_TYPES as AMOUNT_ACTION_TYPES } from './modules/amount';
import offersReducer, { ACTION_TYPES as OFFERS_ACTION_TYPES } from './modules/offers';

export const fetchInitialValues = () => dispatch => api.get('/constraints')
    .then(({ data: { termInterval, amountInterval } }) => {
      dispatch({ type: TERM_ACTION_TYPES.SET_CONFIG, payload: termInterval });
      dispatch({ type: AMOUNT_ACTION_TYPES.SET_CONFIG, payload: amountInterval });

      return { term: termInterval.defaultValue, amount: amountInterval.defaultValue };
    })
    .then(({ term, amount }) => {
      return api.get('/first-loan-offer', {
        params: { term, amount },
      })
        .then(({ data }) => {
          dispatch({ type: OFFERS_ACTION_TYPES.ADD_OFFER, payload: data });
        });
    });

const appReducer = combineReducers({
  term: termReducer,
  amount: amountReducer,
  offers: offersReducer,
});

const exampleInitialState = {};

export const initStore = (initialState = exampleInitialState) => createStore(appReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
