import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { Container, Header } from 'semantic-ui-react';

import TermField from '../components/TermField';
import AmountField from '../components/AmountField';
import Offer from '../components/Offer';
import { fetchInitialValues, initStore } from '../redux/store';
import { resolveScopedStyles } from '../lib';

class App extends Component {
  static async getInitialProps({ store }) {
    await store.dispatch(fetchInitialValues());
  }

  render() {
    const scoped = resolveScopedStyles(
      <scope>
        <style jsx>{`
          .container { margin-top: 36px }
          .offer { margin-top: 24px }
        `}</style>
      </scope>,
    );

    return (
      <div>
        <Container className={scoped.className}>
          <Header><h1>Blueberry Loan Calculator</h1></Header>
          <TermField />
          <AmountField />
          <Offer className={`offer ${scoped.className}`} />
        </Container>
        {scoped.styles}
      </div>
    );
  }
}


export default withRedux(initStore)(App);
