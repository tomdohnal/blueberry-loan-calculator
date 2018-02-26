import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux/store';

class App extends React.Component {
  static getInitialProps({ store, isServer }) {
    return { isServer };
  }

  render() {
    return (
      <div />
    );
  }
}


export default withRedux(initStore)(App);
