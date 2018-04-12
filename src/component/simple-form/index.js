import React, { Component, Fragment } from 'react';

import { cleanString as clean } from '../../lib/util';

class SimpleForm extends Component {
  state = {
    input: '',
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
      state: { input }, 
      props: { onSubmit },
    } = this;

    if (!input.length || clean(input) === 'nicetrywiseguy...') this.setState({ input: 'Please enter a value...' });
    else if (clean(input) === 'pleaseenteravalue...') this.setState({ input: 'Nice try wise guy...' });
    else {
      onSubmit(input);
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
        placeholder,
        buttonClass,
        buttonStyle,
        buttonText,
      },
      state: { input },
    } = this;

    return (
      <form onSubmit={handleSubmit}>
        <input 
          name="input"
          value={input}
          style={inputStyle}
          className={inputClass}
          onChange={handleChange} 
          placeholder={placeholder}
        />
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
