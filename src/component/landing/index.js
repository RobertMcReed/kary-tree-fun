import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import './_landing.scss';

class Landing extends Component {
  render() {
    return (
      <section className="landing">
        <pre style={{ lineHeight: '1.5em' }}>
          {JSON.stringify(this.props.tree, null, 4)}
        </pre>
      </section>
    );
  }
}

const mapStateToProps = ({ tree }) => ({ tree });

export default connect(mapStateToProps)(Landing);
