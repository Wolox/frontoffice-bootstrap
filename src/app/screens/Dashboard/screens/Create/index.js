import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import structure from '~constants/structure';

import { actionCreators as modalActions } from '~redux/modal/actions';

import { actionCreators as resourceActions } from '~redux/resource/actions';

import CreationContainer from './layout';

function Create({ dispatch, match }) {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(structure.find(model => match.path.split('/')[1] === model.route));
  }, []);

  const handleSubmit = body => dispatch(resourceActions.createResource({ resource: data.name, body }));
  const onCancel = () => dispatch(modalActions.toggleCancelModal());

  return (
    <Formik
      onSubmit={handleSubmit}
      render={props => <CreationContainer {...props} modelData={data} handleCancel={onCancel} />}
    />
  );
}

export default connect()(Create);
