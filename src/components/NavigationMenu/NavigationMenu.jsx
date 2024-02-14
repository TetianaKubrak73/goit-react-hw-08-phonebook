import { NavLink } from 'react-router-dom';

import styles from './NavigationMenu.module.css';

const MainMenu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/contacts">
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default MainMenu;
