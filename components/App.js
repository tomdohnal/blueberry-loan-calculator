import { Container, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Field from './Field';
import Offer from '../components/Offer';
import { setValue as setTermValue } from '../redux/modules/term';
import { setValue as setAmountValue } from '../redux/modules/amount';
import { resolveScopedStyles } from '../lib';

const scoped = resolveScopedStyles(
  <scope>
    <style jsx>{`
          .container { margin-top: 36px }
          .offer { margin-top: 24px }
        `}</style>
  </scope>,
);

const App = ({
  setAmountValue, setTermValue, amount, term,
}) => (
  <div>
    <Container className={scoped.className}>
      <Header><h1>Blueberry Loan Calculator</h1></Header>
      <Field
        header="Amount"
        onValueChange={setAmountValue}
        {...amount}
      />
      <Field
        header="Term"
        onValueChange={setTermValue}
        {...term}
      />
      <Offer className={`offer ${scoped.className}`} />
    </Container>
    {scoped.styles}
  </div>
);

const mapStateToProps = ({ term, amount }) => ({ term, amount });

export default connect(mapStateToProps, { setTermValue, setAmountValue })(App);
