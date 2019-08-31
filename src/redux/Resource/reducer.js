import { completeState, completeReducer, createReducer } from 'redux-recompose';

import { actions } from './actions';
import { PAGE } from './constants';

const stateDescription = {
  [PAGE]: []
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_RESOURCE]
};

export default createReducer(initialState, completeReducer(reducerDescription));
