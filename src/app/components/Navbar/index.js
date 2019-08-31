import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import icLogout from '~assets/ic_logout.svg';

import styles from './styles.module.scss';

function Navbar({ currentUser = { name: 'Jorge' } }) {
  return (
    <header className={`row middle end ${styles.header}`}>
      <h6 className={`m-right-2 ${styles.userName}`}>Hi {currentUser.name}!</h6>
      <button type="button">
        <img src={icLogout} alt="logout" />
      </button>
    </header>
  );
}

Navbar.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string
  })
};

const mapStateToProps = state => ({
  user: state.auth.currentUser
});

export default connect(mapStateToProps)(Navbar);
