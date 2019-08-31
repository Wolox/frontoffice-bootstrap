import { t } from 'i18next';

import { stripObjectBasedOnKeyArray } from '~utils/general';

import { formatBodies } from '~components/Table/utils';

import styles from './styles.module.scss';

export const parseColumns = ({ columns, baseColumns }) =>
  stripObjectBasedOnKeyArray({
    key: 'key',
    source: columns,
    baseArray: baseColumns
  });

export const parseList = postulated => {
  const bodies = formatBodies({
    bodies: postulated,
    options: {
      rowFormatter: row => {
        const newRowBody = {
          id: row.rowId,
          data: row,
          url: '#',
          config: {
            styles: { rowLink: styles.rowLink }
          }
        };

        return newRowBody;
      }
    },
    formatter: body => ({
      emptyBodyMessage: t('Table:empty'),
      key: body.key,
      rows: body.rows
    })
  });

  return bodies;
};
