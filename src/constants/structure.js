import InputLabel from '~components/InputLabel';

import Select from '~components/Select';

export const actions = ['INDEX', 'SHOW', 'EDIT', 'DESTROY', 'CREATE'].reduce(
  (acc, value) => ({ ...acc, [value]: value }),
  {}
);

const only = (...params) => params.reduce((acc, value) => ({ ...acc, [value]: true }), {});

export const defaultInputs = {
  text: InputLabel,
  number: InputLabel,
  email: InputLabel,
  select: Select
};

export default [
  {
    name: 'products',
    route: 'products',
    endpoint: 'products',
    only: only(actions.INDEX, actions.DESTROY, actions.SHOW, actions.EDIT, actions.CREATE),
    create: ['name', 'avatar'],
    edit: ['name', 'avatar', 'stock', 'status'],
    show: ['name', 'avatar', 'description', 'status'],
    index: ['id', 'name', 'description'],
    attributes: [
      {
        name: 'id',
        type: 'text',
        columnProportion: 0
      },
      {
        name: 'name',
        type: 'text',
        placeholder: 'Product name',
        columnProportion: 1,
        componentAttributes: {
          label: 'name',
          name: 'name',
          inputId: 'name',
          dataFor: 'name',
          inputType: 'text'
        }
      },
      {
        name: 'avatar',
        type: 'text',
        placeholder: 'Product description',
        columnProportion: 3,
        componentAttributes: {
          label: 'avatar',
          name: 'avatar',
          inputId: 'avatar',
          dataFor: 'avatar',
          inputType: 'text'
        }
      },
      {
        name: 'description',
        type: 'text',
        placeholder: 'Product description',
        columnProportion: 3,
        componentAttributes: {
          label: 'avatar',
          name: 'avatar',
          inputId: 'avatar',
          dataFor: 'avatar',
          inputType: 'text'
        }
      },
      {
        name: 'stock',
        type: 'number',
        placeholder: 'Product description',
        columnProportion: 3,
        componentAttributes: {
          label: 'stock',
          inputType: 'number'
        }
      },
      {
        name: 'status',
        type: 'select',
        placeholder: 'Product description',
        columnProportion: 3,
        componentAttributes: {
          label: 'status',
          inputType: 'select',
          options: ['CREATED', 'PENDING', 'DELIVERED', 'CLOSED']
        }
      },
      {
        name: 'images',
        type: 'has_many',
        placeholder: 'Images'
      }
    ]
  },
  {
    name: 'images',
    route: 'images',
    only: only(actions.SHOW),
    endpoint: 'images',
    attributes: [
      {
        name: 'name',
        type: 'text',
        componentAttributes: {
          label: 'name',
          name: 'name',
          inputId: 'name',
          dataFor: 'name',
          inputType: 'text'
        },
        columnProportion: 1
      }
    ]
  }
];
