import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';

import App from '../components/App';
import { fetchInitialValues, initStore } from '../redux/store';

class Index extends Component {
  static async getInitialProps({ store }) {
    await store.dispatch(fetchInitialValues());
  }

  render() {
    return (
      <App />
    );
  }
}


export default withRedux(initStore)(Index);
