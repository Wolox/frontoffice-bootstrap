export const BASE_COLUMNS = ['id', 'createdAt', 'occupation', 'organizationalUnit', 'area', 'leader'];

export const TABLE_HEADERS = {
  id: {
    id: 0,
    key: 'id',
    title: 'id'
  },
  createdAt: {
    id: 1,
    key: 'createdAt',
    title: 'createdAt'
  },
  occupation: {
    id: 2,
    key: 'occupation',
    title: 'occupation',
    cell: {
      parser: ({ name }) => name
    }
  },
  organizationalUnit: {
    id: 3,
    key: 'organizationalUnit',
    title: 'organizationalUnit',
    cell: {
      parser: ({ name }) => name
    }
  },
  area: {
    id: 4,
    key: 'area',
    title: 'area',
    cell: {
      parser: ({ name }) => name
    }
  },
  leader: {
    id: 5,
    key: 'leader',
    title: 'leader',
    cell: {
      parser: ({ name }) => name
    }
  }
};
