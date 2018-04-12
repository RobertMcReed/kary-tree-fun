import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import Kary from '../../lib/kary';
import SimpleForm from '../simple-form';
import { addNodeAction } from '../../action/tree';

class Landing extends Component {
  addNode = (data, targetId) => {
    const { dispatchAddNode } = this.props;
    dispatchAddNode(data, targetId);
  }

  render() {
    return (
      <Fragment>
        <pre style={{ lineHeight: '1.5em' }}>
          {JSON.stringify(this.props.tree, null, 8)}
        </pre>
        <SimpleForm 
          buttonStyle={{ color: 'black' }} 
          inputStyle={{ color: 'purple', fontSize: '1em' }}
          placeholder1="Node Value..."
          placeholder2="Parent Id..."
          numInputs={this.props.tree.root ? 2 : 1}
          buttonText="Add Node"
          onSubmit={this.addNode}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ tree }) => ({ tree });
const mapDispatchToProps = (dispatch) => ({ 
  dispatchAddNode: (data, targetId) => dispatch(addNodeAction(data, targetId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
