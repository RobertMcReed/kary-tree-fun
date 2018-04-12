import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import { 
  addNodeAction, 
  updateNodeAction,
  removeNodeAction, 
} from '../../action/tree';
import SimpleForm from '../simple-form';

class Controller extends Component {
  addNode = (data, targetId) => {
    const { dispatchAddNode } = this.props;
    dispatchAddNode(data, targetId);
  }

  updateNode = (data, targetId) => {
    const { dispatchUpdateNode } = this.props;
    dispatchUpdateNode(data, targetId);
  }

  removeNode = (targetId) => {
    const { dispatchRemoveNode } = this.props;

    dispatchRemoveNode(targetId);
  }

  render() {
    return (
      <Fragment>
        <SimpleForm 
          buttonStyle={{ color: 'black' }} 
          inputStyle={{ color: 'purple', fontSize: '1em' }}
          placeholder1="Node Value..."
          placeholder2="Target Id..."
          numInputs={this.props.tree.root ? 2 : 1}
          buttonText1="Add Node"
          buttonText2="Update Node"
          buttonText3="Remove Node"
          onOne={this.addNode}
          onTwo={this.updateNode}
          onThree={this.removeNode}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ tree }) => ({ tree });
const mapDispatchToProps = (dispatch) => ({ 
  dispatchRemoveNode: (targetId) => dispatch(removeNodeAction(targetId)),
  dispatchAddNode: (data, targetId) => dispatch(addNodeAction(data, targetId)),
  dispatchUpdateNode: (data, targetId) => dispatch(updateNodeAction(data, targetId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
