import { createTypes, completeTypes } from 'redux-recompose';

export const actions = createTypes(
  completeTypes([], ['TOGGLE_DELETE_MODAL', 'TOGGLE_CANCEL_MODAL']),
  '@@MODAL'
);

export const actionCreators = {
  toggleDeleteModal: () => ({
    type: actions.TOGGLE_DELETE_MODAL
  }),
  toggleCancelModal: () => ({
    type: actions.TOGGLE_CANCEL_MODAL
  })
};
