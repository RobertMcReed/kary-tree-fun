import React, { Component, Fragment } from 'react';

import { cleanString as clean } from '../../lib/util';

class SimpleForm extends Component {
  state = {
    input1: '',
    input2: '',
  }

  initialState = { ...this.state }

  emptyState = () => this.setState(this.initialState)

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    
    const {
      emptyState, 
      state: { input1, input2 }, 
      props: { onSubmit },
    } = this;

    if (!input1.length) {
      this.setState({ input1: 'Please enter a value' });
    } else if (!input2.length && this.props.numInputs > 1) this.setState({ input2: 'Please enter a value' });
    else {
      onSubmit(input1, input2);
      emptyState();
    }
  }

  render() {
    const {
      handleSubmit,
      handleChange,
      props: {
        inputClass,
        inputStyle,
        placeholder1,
        placeholder2,
        buttonClass,
        buttonStyle,
        buttonText,
      },
      state: { input1, input2 },
    } = this;

    return (
      <form onSubmit={handleSubmit}>
        <input 
          name="input1"
          value={input1}
          style={inputStyle}
          className={inputClass}
          onChange={handleChange} 
          placeholder={placeholder1}
        />
        { this.props.numInputs > 1 ?
          <input 
            name="input2"
            value={input2}
            style={inputStyle}
            className={inputClass}
            onChange={handleChange} 
            placeholder={placeholder2}
          /> : null
        }
        <button
          style={buttonStyle}
          className={buttonClass}
        >
          {buttonText || 'Submit'}
        </button>
      </form>
    );
  }
}

export default SimpleForm;
