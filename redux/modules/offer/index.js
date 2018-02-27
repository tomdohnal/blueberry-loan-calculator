import axios from 'axios/index';

export const ACTION_TYPES = {
  COUNT_LOAN: 'OFFER.COUNT_LOAN',
};

export const countLoan = () => (dispatch, getState) => {
  const state = getState();

  const termValue = state.term.value || state.term.defaultValue;
  const amountValue = state.amount.value || state.amount.defaultValue;

  return axios.get('https://js-developer-second-round.herokuapp.com/api/v1/application/first-loan-offer', {
    params: { term: termValue, amount: amountValue },
  })
    .then(({ data }) => dispatch({
      type: ACTION_TYPES.COUNT_LOAN,
      payload: data,
    }));
};


export default (state = {}, action) => {
  switch (action.type) {
  case ACTION_TYPES.COUNT_LOAN:
    return { ...action.payload };
  default:
    return state;
  }
};
