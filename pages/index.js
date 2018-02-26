import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { Container, Header } from 'semantic-ui-react';

import TermField from '../components/TermField';
import AmountField from '../components/AmountField';
import LoanInfo from '../components/LoanInfo';
import { fetchInitialValues, initStore } from '../redux/store';

class App extends Component {
  static async getInitialProps({ store }) {
    await store.dispatch(fetchInitialValues());
  }

  render() {
    return (
      <div>
        <Container className="mt-2">
          <Header>Blueberry Loan Calculator</Header>
          <TermField />
          <AmountField />
          <LoanInfo />
        </Container>
      </div>
    );
  }
}


export default withRedux(initStore)(App);
