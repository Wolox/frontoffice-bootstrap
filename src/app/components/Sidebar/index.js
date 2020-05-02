import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import structure from '~constants/structure';

import logo from '~assets/logo-white.png';

import Routes from '~constants/routes';

import styles from './styles.module.scss';

function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <Link to={Routes.HOME} className={`${styles.logo} m-top-1 m-bottom-1`}>
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      {structure
        .filter(model => !model.only || model.only.INDEX)
        .map(model => (
          <NavLink
            key={model.name}
            to={`/${model.route}`}
            className={styles.modelLink}
            activeClassName={styles.activeModel}
          >
            {model.name}
          </NavLink>
        ))}
    </aside>
  );
}

export default Sidebar;
