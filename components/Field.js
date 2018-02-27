import React, { Component } from 'react';
import Slider from 'rc-slider';
import { connect } from 'react-redux';

import { countLoan } from '../redux/modules/offer';
import { Select } from 'semantic-ui-react';

class AmountField extends Component {
  updateCalculator = (newValue) => {
    this.props.onValueChange(newValue);
    this.props.countLoan();
  };

  onSliderChange = (value) => {
    this.updateCalculator(value);
  };

  onSelectChange = (_, { value }) => {
    this.updateCalculator(value);
  };

  render() {
    const { header, min, max, step, value, defaultValue } = this.props;

    return (
      <div className="field">
        <div className="slider-labels">
          <h3>{header}</h3>
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
        </div>
        <Slider
          min={min}
          max={max}
          step={step}
          value={value || defaultValue}
          onChange={this.onSliderChange}
        />
        <div className="slider-labels">
          <span><strong>Min:&nbsp;</strong>{min}</span>
          <span><strong>Max:&nbsp;</strong>{max}</span>
        </div>
        <style jsx>{`
          .field {
            margin-top: 24px;
          }
          h3 {
            margin: 12px 0 0 0;
          }
          .slider-labels {
            display: flex;
            justify-content: space-between;
          }
        `}</style>
      </div>
    );
  }
}


export default connect(null, { countLoan })(AmountField);
