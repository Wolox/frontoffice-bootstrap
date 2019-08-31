import React from 'react';
import Modal from 'react-responsive-modal';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

import { actionCreators as modalActions } from '~redux/modal/actions';

import Routes from '~constants/routes';

function ConfirmModal({ open, toggleCancelModal, callBack }) {
  return (
    <Modal open={open} onClose={toggleCancelModal} center>
      <div className="m-top-3 column">
        <h2 className="subtitle m-bottom-3">¿Estás seguro que querés cancelar esta acción?</h2>
        <button type="button" onClick={callBack} className="button-primary">
          Confirmar
        </button>
      </div>
    </Modal>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleCancelModal: () => dispatch(modalActions.toggleCancelModal()),
  callBack: () => {
    dispatch(push(Routes.HOME));
    dispatch(modalActions.toggleCancelModal());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(ConfirmModal);
