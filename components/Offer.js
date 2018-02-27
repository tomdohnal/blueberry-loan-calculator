import { connect } from 'react-redux';

const Offer = ({
  offer: { totalPrincipal, term, totalCostOfCredit, totalRepayableAmount, monthlyPayment },
  className,
}) => (
  <div className={className}>
    <h3>Total principal:&nbsp;{totalPrincipal}</h3>
    <h3>Term:&nbsp;{term}</h3>
    <h3>Total cost of credit:&nbsp;{totalCostOfCredit}</h3>
    <h3>Total repayable amount:&nbsp;{totalRepayableAmount}</h3>
    <h3>Monthly payment:&nbsp;{monthlyPayment}</h3>
    <style jsx>{`
      h3 {
        margin: 12px 0;
      }
    `}</style>
  </div>
);

const mapStateToProps = state => ({ offer: state.offer });

export default connect(mapStateToProps)(Offer);
