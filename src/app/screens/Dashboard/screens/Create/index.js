import React, { Component } from 'react';
import { connect } from 'react-redux';

import structure from '~constants/structure';

import { actionCreators as modalActions } from '~redux/modal/actions';

import CreationContainer from './layout';

class Create extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.setState({
      data: structure.find(model => this.props.match.path.split('/')[1] === model.endpoint)
    });
  }

  // TODO integrate with api sauce
  handleSubmit = values => {};

  onCancel = () => {
    this.props.dispatch(modalActions.toggleCancelModal());
  };

  onDelete = () => {
    this.props.dispatch(modalActions.toggleDeleteModal());
  };

  render() {
    return (
      <CreationContainer
        modelData={this.state.data}
        onSubmit={this.handleSubmit}
        handleCancel={this.onCancel}
        handleDelete={this.onDelete}
      />
    );
  }
}
export default connect()(Create);
