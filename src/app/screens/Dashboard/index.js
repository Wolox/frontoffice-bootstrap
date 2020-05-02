import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import structure from '~constants/structure';

import Sidebar from '~components/Sidebar';

import ConfirmModal from '~components/ConfirmModal';

import DeleteModal from '~components/DeleteModal';

import Navbar from '~components/Navbar';

import { push } from 'connected-react-router';

import Routes from '~constants/routes';

import styles from './styles.module.scss';

const Index = lazy(() => import('./screens/Index'));
const Detail = lazy(() => import('./screens/Detail'));
const Create = lazy(() => import('./screens/Create'));
const Edit = lazy(() => import('./screens/Edit'));

const GenericRouter = () =>
  structure.map(model => (
    <Switch key={model.route}>
      <Route exact path={`/${model.route}`} component={Index} />
      {(!model.only || model.only.CREATE) && <Route exact path={`/${model.route}/new`} component={Create} />}
      {(!model.only || model.only.SHOW) && <Route exact path={`/${model.route}/:id`} component={Detail} />}
      {(!model.only || model.only.EDIT) && <Route exact path={`/${model.route}/:id/edit`} component={Edit} />}
    </Switch>
  ));

function Dashboard({ cancelModal, deleteModal, ...props }) {
  if (window.location.pathname === Routes.HOME) {
    props.dispatch(push(`/${structure[0].route}`));
  }

  return (
    <div className="row">
      <Sidebar />
      <ConfirmModal open={cancelModal} />
      <DeleteModal open={deleteModal} />
      <div className="column item-1">
        <Navbar />
        <main className={`${styles.container} column`}>
          <Switch>
            <GenericRouter />
            <Route exact path={Routes.HOME} component={Index} />
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
