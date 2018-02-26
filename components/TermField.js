import React, { Component } from 'react';
import Slider from 'rc-slider';
import { connect } from 'react-redux';

import { setValue } from '../redux/modules/term';
import { countLoan } from '../redux/modules/common';
import { Select } from 'semantic-ui-react';

class TermField extends Component {
  updateCalculator = (newAmountValue) => {
    this.props.setValue(newAmountValue);
    this.props.countLoan({
      amount: this.props.amount.value || this.props.amount.defaultValue,
      term: newAmountValue,
    });
  };

  onSliderChange = (value) => {
   this.updateCalculator(value);
  };

  onSelectChange = (_, { value }) => {
    this.updateCalculator(value);
  };

  render() {
    const { min, max, step, value, defaultValue } = this.props.term;

    return (
      <div>
        <h3>Term</h3>
        <strong>{`Min: ${min}`}</strong>
        <strong>{`Current: ${value || defaultValue}`}</strong>
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

const mapStateToProps = ({ term, amount }) => ({ term, amount });

export default connect(mapStateToProps, { setValue, countLoan })(TermField);
