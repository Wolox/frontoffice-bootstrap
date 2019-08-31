import React, { Component } from 'react';

import structure from '~constants/structure';

import logo from './assets/logo.svg';
import styles from './styles.module.scss';

class Detail extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.setState({
      data: structure.find(model => this.props.match.path.split('/')[1] === model.endpoint)
    });;
  }

  render() {
    return (
      <>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <p className={styles.text}>{this.state.data.name} Detail</p>
          <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
            </a>
        </header>
      </>
    );
  }
}

export default Detail;
