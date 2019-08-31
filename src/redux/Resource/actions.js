import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';

import { defaultCamelcase } from '~serializer/defaultSerializer';

import { getList } from '~services/ConectorService';

import paginatorActions from '~redux/Paginator/actions';

import { formatPaging } from './utils';
import { PAGE } from './constants';

export const actions = createTypes(completeTypes(['GET_RESOURCE']), '@@RESOURCE');

const actionCreators = {
  getOpportunities: (resource, page, limit) => ({
    type: actions.GET_RESOURCE,
    target: PAGE,
    service: getList,
    payload: { resource, page, limit },
    successSelector: response => defaultCamelcase(response.data.page),
    failureSelector: response => response.status,
    injections: [
      withPostSuccess((dispatch, response) => {
        dispatch(paginatorActions.setPagingOptions(formatPaging(response)));
      })
    ]
  })
};

export default actionCreators;
