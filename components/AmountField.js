import React, { Component } from 'react';
import Slider from 'rc-slider';
import { connect } from 'react-redux';

import { setValue } from '../redux/modules/amount';
import { countLoan } from '../redux/modules/common';
import { Select } from 'semantic-ui-react';

class AmountField extends Component {
  updateCalculator = (newAmountValue) => {
    this.props.setValue(newAmountValue);
    this.props.countLoan({
      amount: newAmountValue,
      term: this.props.term.value || this.props.term.defaultValue,
    });
  };

  onSliderChange = (value) => {
    this.updateCalculator(value);
  };

  onSelectChange = (_, { value }) => {
    this.updateCalculator(value);
  };

  render() {
    const { min, max, step, value, defaultValue } = this.props.amount;

    return (
      <div>
        <h3>Amount</h3>
        <strong>Min: {min}</strong>
        <strong>Current: {value || defaultValue}</strong>
        <strong>Max: {max}</strong>
        <Select
          value={value || defaultValue}
          options={
              Array.from({ length: ((max - min) / step) + 1}, (_, index) => ({
                text: ((index) * step) + min,
                value: ((index) * step) + min,
                key: ((index) * step) + min,
              }
            ))
          }
          onChange={this.onSelectChange}
        />
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
