import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

import termReducer, { ACTION_TYPES as TERM_ACTION_TYPES } from './modules/term';
import amountReducer, { ACTION_TYPES as AMOUNT_ACTION_TYPES } from './modules/amount';
import offerReducer, { ACTION_TYPES as OFFER_ACTION_TYPES } from './modules/offer';

export const fetchInitialValues = () => dispatch => axios.get('http://js-developer-second-round.herokuapp.com/api/v1/application/constraints')
    .then(({ data: { termInterval, amountInterval } }) => {
      dispatch({ type: TERM_ACTION_TYPES.SET_CONFIG, payload: termInterval });
      dispatch({ type: AMOUNT_ACTION_TYPES.SET_CONFIG, payload: amountInterval });

      return { term: termInterval.defaultValue, amount: amountInterval.defaultValue };
    })
    .then(({ term, amount }) => {
      return axios.get('https://js-developer-second-round.herokuapp.com/api/v1/application/first-loan-offer', {
        params: { term, amount },
      })
        .then(({ data }) => {
          dispatch({ type: OFFER_ACTION_TYPES.COUNT_LOAN, payload: data });
        });
    });

const appReducer = combineReducers({
  term: termReducer,
  amount: amountReducer,
  offer: offerReducer,
});

const exampleInitialState = {};

export const initStore = (initialState = exampleInitialState) => createStore(appReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
