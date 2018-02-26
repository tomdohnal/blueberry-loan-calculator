import { connect } from 'react-redux';

const LoanInfo = ({
 common: { totalPrincipal, term, totalCostOfCredit, totalRepayableAmount, monthlyPayment },
}) => (
  <div>
    <h3>Total principal:{totalPrincipal}</h3>
    <h3>Term:{term}</h3>
    <h3>Total cost of credit:{totalCostOfCredit}</h3>
    <h3>Total repayable amount:{totalRepayableAmount}</h3>
    <h3>Monthly payment:{monthlyPayment}</h3>
  </div>
);

const mapStateToProps = (state) => {
  return { common: state.common };
};

export default connect(mapStateToProps)(LoanInfo);
