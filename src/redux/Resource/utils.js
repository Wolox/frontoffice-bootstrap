import { defaultCamelcase } from '~serializer/defaultSerializer';

export const formatPaging = response => {
  delete response.page;
  return defaultCamelcase.serialize(response);
};
