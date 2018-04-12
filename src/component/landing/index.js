import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

class Landing extends Component {
  render() {
    return (
      <section className="tree">
        <pre style={{ lineHeight: '1.5em' }}>
          {JSON.stringify(this.props.tree, null, 8)}
        </pre>
      </section>
    );
  }
}

const mapStateToProps = ({ tree }) => ({ tree });

export default connect(mapStateToProps)(Landing);
