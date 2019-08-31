import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import structure from '~constants/structure';

import Sidebar from '~components/Sidebar';

import ConfirmModal from '~components/ConfirmModal';

import DeleteModal from '~components/DeleteModal';

import Navbar from '~components/Navbar';

import Routes from '../../../constants/routes';

import styles from './styles.module.scss';

const List = lazy(() => import('./screens/List'));
const Detail = lazy(() => import('./screens/Detail'));
const Create = lazy(() => import('./screens/Create'));
const Edit = lazy(() => import('./screens/Edit'));

const GenericRouter = () =>
  structure.map(model => (
    <Switch key={model.endpoint}>
      <Route exact path={`/${model.endpoint}`} component={List} />
      <Route exact path={`/${model.endpoint}/new`} component={Create} />
      <Route path={`/${model.endpoint}/:id`} component={Detail} />
      <Route exact path={`/${model.endpoint}/:id/edit`} component={Edit} />
    </Switch>
  ));

function Dashboard({ cancelModal, deleteModal }) {
  return (
    <div className="row">
      <Sidebar />
      <ConfirmModal open={cancelModal} />
      <DeleteModal open={deleteModal} />
      <div className="column item-1">
        <Navbar />
        <main className={`${styles.container} item-1`}>
          <Switch>
            <GenericRouter />
            <Route exact path={Routes.HOME} component={List} />
            <Route component={<Redirect to={Routes.HOME} />} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

const mapStateToProps = store => ({
  cancelModal: store.modal.cancelModal,
  deleteModal: store.modal.deleteModal
});

export default connect(mapStateToProps)(Dashboard);
