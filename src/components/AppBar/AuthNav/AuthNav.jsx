import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';
export const AuthNav = () => {
  return (
    <div className={styles.block}>
      <NavLink className={styles.link} to="/register">
        Register /
      </NavLink>
      <NavLink className={styles.link} to="/login">
        LogIn
      </NavLink>
    </div>
  );
};
