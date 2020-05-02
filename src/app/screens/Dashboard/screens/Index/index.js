import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import { connect } from 'react-redux';
import { arrayOf, bool, any, number, func } from 'prop-types';

import styles from './styles.module.scss';

import { actionCreators as resourceActions } from '~redux/resource/actions';

import { actionCreators as paginatorActions } from '~redux/Paginator/actions';

import structure from '~constants/structure';

import Paginator from '~components/Paginator';

import Spinner from '~components/Spinner';

import Table from '~components/Table';

import { DEFAULT_LIMIT } from './constants';
import { parseList, getColumns } from './utils';

class Index extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.setState({
      data: structure.find(model => this.props.match.path.slice(1) === model.route)
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      this.props.getResource(this.state.data.route, this.props.currentPage, DEFAULT_LIMIT);
    }
  }

  handlePageChange = newPage => this.props.setCurrentPage(newPage);

  render() {
    const { list, listError, loading, currentPage, totalPages, nextPage } = this.props;
    const { endpoint, attributes, only } = this.state?.data;

    const columns = getColumns(
      attributes?.filter(
        attribute => !this.state.data.index || this.state.data.index.includes(attribute.name)
      )
    );
    const bodies = parseList(list, endpoint);
    return (
      <>
        <div className="row space-between middle form-header">
          <h1 className="title2">{t('List:componentList', { component: this.state.data.name })}</h1>
          {(!only || only.CREATE) && (
            <Link to={`${this.props.match.path}/new`} className={`${styles.link} button-primary`}>
              {t('List:create')}
            </Link>
          )}
        </div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <Table
              bodies={bodies}
              columns={columns}
              error={listError}
              errorMessage={t('Table:errorData')}
              loading={loading}
              config={{ styles: { headers: styles.headers } }}
            />
            <Paginator
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={this.handlePageChange}
              nextPage={nextPage}
            />
          </>
        )}
      </>
    );
  }
}

Index.propTypes = {
  getResource: func.isRequired,
  setCurrentPage: func.isRequired,
  currentPage: number,
  list: arrayOf(any),
  listError: bool,
  loading: bool,
  nextPage: number,
  totalPages: number
};

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
  getResource: (resource, page, limit) => dispatch(resourceActions.getResource(resource, page, limit)),
  setCurrentPage: newPage => dispatch(paginatorActions.setCurrentPage(newPage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
