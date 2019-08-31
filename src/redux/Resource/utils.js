import { defaultCamelcase } from '~serializer/defaultSerializer';

export const formatPaging = ({ page, ...rest }) => defaultCamelcase.serialize(rest);
