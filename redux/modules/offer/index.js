import axios from 'axios/index';

export const ACTION_TYPES = {
  COUNT_LOAN: 'OFFER.COUNT_LOAN',
};

export const countLoan = ({ term, amount }) => dispatch => (
  axios.get('https://js-developer-second-round.herokuapp.com/api/v1/application/first-loan-offer', {
    params: { term, amount },
  })
  .then(({ data }) => dispatch({
    type: ACTION_TYPES.COUNT_LOAN,
    payload: data,
  }))
);

export default (state = {}, action) => {
  switch (action.type) {
  case ACTION_TYPES.COUNT_LOAN:
    return { ...action.payload };
  default:
    return state;
  }
};
