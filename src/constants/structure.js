import InputLabel from '~components/InputLabel';

export const actions = ['INDEX', 'SHOW', 'EDIT', 'DESTROY', 'CREATE'].reduce(
  (acc, value) => ({ ...acc, [value]: value }),
  {}
);

const only = (...params) => params.reduce((acc, value) => ({ ...acc, [value]: true }), {});

export default [
  {
    name: 'products',
    route: 'products',
    endpoint: 'products',
    only: only(actions.INDEX, actions.DESTROY, actions.SHOW, actions.EDIT, actions.CREATE),
    create: ['name', 'avatar'],
    edit: ['name', 'avatar'],
    show: ['name', 'avatar', 'description', 'images'],
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
        component: InputLabel,
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
        component: InputLabel,
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
        component: InputLabel,
        componentAttributes: {
          label: 'avatar',
          name: 'avatar',
          inputId: 'avatar',
          dataFor: 'avatar',
          inputType: 'text'
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
        component: InputLabel,
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
