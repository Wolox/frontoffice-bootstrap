import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import styles from './styles.module.scss';

import structure from '~constants/structure';
import Sidebar from '~components/Sidebar';
import ConfirmModal from '~components/ConfirmModal';
import DeleteModal from '~components/DeleteModal';
import Navbar from '~components/Navbar';
import Routes from '~constants/routes';

const Index = lazy(() => import('./screens/Index'));
const Detail = lazy(() => import('./screens/Detail'));
const Create = lazy(() => import('./screens/Create'));
const Edit = lazy(() => import('./screens/Edit'));

const GenericRouter = () =>
  structure.map(model => (
    <Switch key={model.route}>
      <Route exact path={`/${model.route}`} render={props => <Index {...props} data={model} />} />
      {(!model.only || model.only.CREATE) && (
        <Route exact path={`/${model.route}/new`} render={props => <Create {...props} data={model} />} />
      )}
      {(!model.only || model.only.SHOW) && (
        <Route exact path={`/${model.route}/:id`} render={props => <Detail {...props} data={model} />} />
      )}
      {(!model.only || model.only.EDIT) && (
        <Route exact path={`/${model.route}/:id/edit`} render={props => <Edit {...props} data={model} />} />
      )}
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
