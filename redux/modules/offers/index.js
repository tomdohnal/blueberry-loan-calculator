import { api } from '../../../lib';

export const ACTION_TYPES = {
  ADD_OFFER: 'OFFER.ADD_OFFER',
};

export const getOffer = () => (dispatch, getState) => {
  const state = getState();

  const termValue = state.term.value || state.term.defaultValue;
  const amountValue = state.amount.value || state.amount.defaultValue;

  const matchingOffer = state.offers.find(({ term, totalPrincipal }) => (
    Number(term) === termValue && Number(totalPrincipal) === amountValue
  ));

  if (matchingOffer) return;

  return api.get('/real-first-loan-offer', {
    params: { term: termValue, amount: amountValue },
  })
    .then(({ data }) => dispatch({
      type: ACTION_TYPES.ADD_OFFER,
      payload: data,
    }));
};

export default (state = [], action) => {
  switch (action.type) {
  case ACTION_TYPES.ADD_OFFER:
    return [...state, { ...action.payload }];
  default:
    return state;
  }
};
