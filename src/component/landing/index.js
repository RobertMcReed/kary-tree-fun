import React, { Component, Fragment } from 'react';

import Kary from '../../lib/kary';
import SimpleForm from '../simple-form';

class Landing extends Component {
  state = {
    tree: new Kary('hey there bub'),
  }

  render() {
    return (
      <Fragment>
        <pre>
          {JSON.stringify(this.state.tree, null, 4)}
        </pre>
        <SimpleForm 
          buttonStyle={{ color: 'black' }} 
          inputStyle={{ color: 'purple', fontSize: '1em' }}
          placeholder="Hey there bubba..."
          buttonText="Add Node"
          onSubmit={this.addNode}
        />
      </Fragment>
    );
  }
}

export default Landing;
