import React, { Component } from 'react';
import Slider from 'rc-slider';
import { connect } from 'react-redux';

import { setValue } from '../redux/modules/amount';
import { countLoan } from '../redux/modules/common';

class AmountField extends Component {
  onSliderChange = (value) => {
    const termValue = this.props.term.value || this.props.term.defaultValue;

    this.props.setValue(value);
    this.props.countLoan({ amount: value, term: termValue });
  };

  render() {
    const { min, max, step, value, defaultValue } = this.props.amount;

    return (
      <div>
        <h3>Amount</h3>
        <strong>Min: {min}</strong>
        <strong>Current: {value || defaultValue}</strong>
        <strong>Max: {max}</strong>
        <Slider
          min={min}
          max={max}
          step={step}
          value={value || defaultValue}
          onChange={this.onSliderChange}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ amount, term }) => ({ amount, term });

export default connect(mapStateToProps, { setValue, countLoan })(AmountField);
