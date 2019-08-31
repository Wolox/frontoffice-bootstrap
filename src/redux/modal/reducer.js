import { completeReducer, createReducer, onReadValue, onSpreadValue } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  deleteModal: false,
  cancelModal: false
};

const reducerDescription = {
  primaryActions: [actions.TOGGLE_CANCEL_MODAL],
  override: {
    [actions.TOGGLE_CANCEL_MODAL]: state => ({
      ...state,
      cancelModal: !state.cancelModal
    }),
    [actions.TOGGLE_DELETE_MODAL]: state => ({
      ...state,
      deleteModal: !state.deleteModal
    })
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
