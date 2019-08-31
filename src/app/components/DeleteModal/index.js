import React from 'react';
import Modal from 'react-responsive-modal';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

import { actionCreators as modalActions } from '~redux/modal/actions';

import Routes from '~constants/routes';

function DeleteModal({ open, toggleDeletemodal, callBack }) {
  return (
    <Modal open={open} onClose={toggleDeletemodal} center>
      <div className="m-top-3 column">
        <h2 className="subtitle m-bottom-2">¿Estás seguro que quieres borrar este elemento?</h2>
        <button type="button" onClick={callBack} className="button-primary">
          Confirmar
        </button>
      </div>
    </Modal>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleDeletemodal: () => dispatch(modalActions.toggleDeleteModal()),
  callBack: () => {
    dispatch(push(Routes.HOME));
    dispatch(modalActions.toggleDeleteModal());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(DeleteModal);
