import React, { Component } from 'react';
import { connect } from 'react-redux';
import { t } from 'i18next';
import { arrayOf, any, bool } from 'prop-types';

import resourceActions from '~redux/Resource/actions';

import structure from '~constants/structure';

import Paginator from '~components/Paginator';

import styles from './styles.module.scss';
import { TABLE_HEADERS, BASE_COLUMNS } from './constants';
import { parseColumns, parseList } from './utils';

import Table from '~components/Table';

class List extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.setState({
      data: structure.find(model => this.props.match.path.slice(1) === model.endpoint)
    });

    this.props.getResource();
  }

  render() {
    const { list, listError, loading } = this.props;
    const columns = parseColumns({ columns: TABLE_HEADERS, baseColumns: BASE_COLUMNS });
    const bodies = parseList(list);
    return (
      <div className={styles.container}>
        <Table
          bodies={bodies}
          columns={columns}
          error={listError}
          errorMessage={t('Table:errorData')}
          loading={loading}
          config={{ styles: { headers: styles.headers } }}
        />
        <Paginator />
      </div>
    );
  }
}

List.propTypes = {
  list: arrayOf(any),
  listError: bool,
  loading: bool
}

const mapStateToProps = state => ({
  currentPage: state.paginator.currentPage,
  totalPages: state.paginator.totalPages,
  count: state.paginator.count,
  list: state.resource.page,
  totalCount: state.paginator.totalCount,
  nextPage: state.paginator.nextPage,
  listError: state.resource.pageError,
  loading: state.resource.pageLoading
});

const mapDispatchToProps = dispatch => ({
  getResource: () => dispatch(resourceActions.getResource())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
