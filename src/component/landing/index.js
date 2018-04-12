import React, { Component, Fragment } from 'react';

import Kary from '../../lib/kary';
import SimpleForm from '../simple-form';

class Landing extends Component {
  state = {
    tree: new Kary(),
  }

  addNode = (data, targetId) => {
    const { tree } = this.state;

    const newTree = !tree.root 
      ? tree.addFirstNode(data) 
      : tree.reduce({ type: 'ADD', data, targetId });
    
    this.setState({ tree: newTree });
  }

  render() {
    return (
      <Fragment>
        <pre style={{lineHeight: '1.5em' }}>
          {JSON.stringify(this.state.tree, null, 8)}
        </pre>
        <SimpleForm 
          buttonStyle={{ color: 'black' }} 
          inputStyle={{ color: 'purple', fontSize: '1em' }}
          placeholder1="Node Value..."
          placeholder2="Parent Id..."
          numInputs={this.state.tree.root ? 2 : 1}
          buttonText="Add Node"
          onSubmit={this.addNode}
        />
      </Fragment>
    );
  }
}

export default Landing;
