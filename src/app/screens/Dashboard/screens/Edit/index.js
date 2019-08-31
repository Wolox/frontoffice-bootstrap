import React, { Component } from 'react';

import logo from './assets/logo.svg';
import styles from './styles.module.scss';

import structure from '~constants/structure';

class Edit extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.setState({
      data: structure.find(model => props.match.path.slice(1).split('/')[1] === model.endpoint)
    });
  }

  render() {
    return (
      <>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <p className={styles.text}>{this.state.data.name} edition</p>
          <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </>
    );
  }
}

export default Edit;
