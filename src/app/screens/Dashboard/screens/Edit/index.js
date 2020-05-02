import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { actionCreators as modalActions } from '~redux/modal/actions';

import { actionCreators as resourceActions } from '~redux/resource/actions';

import structure from '~constants/structure';

import Spinner from '~components/Spinner';

import EditContainer from './layout';

function Edit({ resource, dispatch, match, loading }) {
  const [data, setData] = useState({});
  useEffect(() => {
    if (!Object.keys(resource).length) {
      dispatch(
        resourceActions.getResourceDetail({
          resource: match.path.slice(1).split('/')[0],
          id: match.params.id
        })
      );
    }
    setData(structure.find(model => match.path.slice(1).split('/')[0] === model.endpoint));
  }, []);

  const handleSubmit = body => {
    dispatch(
      resourceActions.editResource({
        resource: data.name,
        body: { ...body, id: match.url.slice(1).split('/')[1] }
      })
    );
  };

  const onCancel = () => dispatch(modalActions.toggleCancelModal());

  const onDelete = () => dispatch(modalActions.toggleDeleteModal());

  return loading ? (
    <Spinner />
  ) : (
    <EditContainer
      modelData={data}
      onSubmit={handleSubmit}
      initialValues={resource}
      handleCancel={onCancel}
      handleDelete={onDelete}
    />
  );
}

const mapStateToProps = store => ({
  resource: store.resource.resource,
  loading: store.resource.resourceLoading
});

export default connect(mapStateToProps)(Edit);
