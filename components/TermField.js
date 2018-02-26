import React, { Component } from 'react';
import Slider from 'rc-slider';
import { connect } from 'react-redux';

import { setValue } from '../redux/modules/term';
import { countLoan } from '../redux/modules/common';

class TermField extends Component {
  onSliderChange = (value) => {
    const amountValue = this.props.amount.value || this.props.amount.defaultValue;

    this.props.setValue(value);
    this.props.countLoan({ term: value, amount: amountValue });
  };

  render() {
    const { min, max, step, value, defaultValue } = this.props.term;

    return (
      <div>
        <h3>Term</h3>
        <strong>{`Min: ${min}`}</strong>
        <strong>{`Current: ${value || defaultValue}`}</strong>
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

const mapStateToProps = ({ term, amount }) => ({ term, amount });

export default connect(mapStateToProps, { setValue, countLoan })(TermField);
