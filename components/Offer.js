import { connect } from 'react-redux';
import { Loader } from 'semantic-ui-react';

const Offer = (props) => {
  const { className, loading } = props;
  let totalPrincipal,
    term,
    totalCostOfCredit,
    totalRepayableAmount,
    monthlyPayment;

  if (props.hasOwnProperty('offer')) {
    const offer = props.offer;

    totalPrincipal = offer.totalPrincipal;
    term = offer.term;
    totalCostOfCredit = offer.totalCostOfCredit;
    totalRepayableAmount = offer.totalRepayableAmount;
    monthlyPayment = offer.monthlyPayment;
  }

  return (
    <div className={className}>
      <h3>Total principal:&nbsp;
        {loading ? <Loader active inline size="tiny" /> : totalPrincipal}
      </h3>
      <h3>Term:&nbsp;
        {loading ? <Loader active inline size="tiny" /> : term}
      </h3>
      <h3>Total cost of credit:&nbsp;
        {loading ? <Loader active inline size="tiny" /> : totalCostOfCredit}
      </h3>
      <h3>Total repayable amount:&nbsp;
        {loading ? <Loader active inline size="tiny" /> : totalRepayableAmount}
      </h3>
      <h3>Monthly payment:&nbsp;
        {loading ? <Loader active inline size="tiny" /> : monthlyPayment.toFixed(2)}
      </h3>
      <style jsx>{`
      h3 {
        margin: 12px 0;
      }
    `}</style>
    </div>
  );
};

const mapStateToProps = ({ term, amount, offers }) => {
  const termValue = term.value || term.defaultValue;
  const amountValue = amount.value || amount.defaultValue;

  if (!offers.length) {
    return { loading: true };
  }

  const matchingOffer = offers.find(({ term, totalPrincipal }) => (
    Number(term) === termValue && Number(totalPrincipal) === amountValue
  ));

  if (!matchingOffer) {
    return { loading: true };
  }

  return { offer: matchingOffer };
};

export default connect(mapStateToProps)(Offer);
