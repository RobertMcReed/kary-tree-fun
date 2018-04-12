import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import { code as karyCode } from '../../assets/kary';
import { addCodeAction } from '../../action/code';

class Live extends Component {
  state = {
    char: 0,
  }

  componentDidMount() {
    this.props.dispatchAddCode(karyCode);
  }

  handleChange = e => {
    this.setState(prevState => ({
      char: prevState.char + 1,
    }));
  }

  render() {
    return (
      <section className="live">
        <textarea 
          className="text-area"
          onChange={this.handleChange}
          value={this.props.code ? this.props.code.slice(0, this.state.char * 3) : ''}
          rows={10}
        />
      </section>
    );
  }
}

const mapStateToProps = ({ code }) => ({ code });
const mapDispatchToProps = (dispatch) => ({
  dispatchAddCode: (code) => dispatch(addCodeAction(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Live);
