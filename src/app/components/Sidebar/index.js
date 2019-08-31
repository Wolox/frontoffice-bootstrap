import React from 'react';
import { NavLink } from 'react-router-dom';

import structure from '~constants/structure';

import logo from '~assets/logo-white.png';

import styles from './styles.module.scss';

function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <img src={logo} alt="logo" className={`${styles.logo} m-top-1 m-bottom-1`} />
      {structure.map(model => (
        <NavLink
          key={model.name}
          to={`/${model.endpoint}`}
          className={styles.modelLink}
          activeClassName={styles.activeModel}
        >
          {model.name.charAt(0).toUpperCase() + model.name.slice(1)}
        </NavLink>
      ))}
    </aside>
  );
}

export default Sidebar;
