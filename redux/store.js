import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const exampleInitialState = {};


// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
  default: return state;
  }
};

// ACTIONS


export const initStore = (initialState = exampleInitialState) => createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
