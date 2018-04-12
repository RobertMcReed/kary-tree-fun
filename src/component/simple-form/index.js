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

  handleOneAndTwo = handleFn => e => {
    e.preventDefault();
    
    const {
      emptyState, 
      state: { input1, input2 }, 
    } = this;

    if (!input1.length) {
      this.setState({ input1: 'Please enter a value' });
    } else if (!input2.length && this.props.numInputs > 1) this.setState({ input2: 'Please enter a value' });
    else {
      handleFn(input1, input2);
      emptyState();
    }
  }

  handleOne = this.handleOneAndTwo(this.props.onOne);
  handleTwo = this.handleOneAndTwo(this.props.onTwo);

  handleThree = e => {
    e.preventDefault();
    
    const {
      emptyState, 
      state: { input2 }, 
      props: { onThree },
    } = this;

    if (!input2.length) this.setState({ input2: 'Please enter a value' });
    else {
      onThree(input2);
      emptyState();
    }
  }

  render() {
    const {
      handleOne,
      handleTwo,
      handleThree,
      handleChange,
      props: {
        inputClass,
        inputStyle,
        placeholder1,
        placeholder2,
        buttonClass,
        buttonStyle,
        buttonText1,
        buttonText2,
        buttonText3,
      },
      state: { input1, input2 },
    } = this;

    const show = this.props.numInputs > 1;

    return (
      <form>
        <input 
          name="input1"
          value={input1}
          style={inputStyle}
          className={inputClass}
          onChange={handleChange} 
          placeholder={placeholder1}
        />
        { show ?
          <input 
            name="input2"
            value={input2}
            style={inputStyle}
            className={inputClass}
            onChange={handleChange} 
            placeholder={placeholder2}
          /> : null
        }
        <div className="buttons" >
          <button
            style={buttonStyle}
            className={buttonClass}
            onClick={handleOne}
          >
            {buttonText1 || 'Submit'}
          </button>
          { show ?
            <button
              style={buttonStyle}
              className={buttonClass}
              onClick={handleTwo}
            >
              {buttonText2 || 'Submit'}
            </button> : null
          }
          { show ? 
            <button
              style={buttonStyle}
              className={buttonClass}
              onClick={handleThree}
            >
              {buttonText3 || 'Submit'}
            </button> : null
          }
        </div>
      </form>
    );
  }
}

export default SimpleForm;
