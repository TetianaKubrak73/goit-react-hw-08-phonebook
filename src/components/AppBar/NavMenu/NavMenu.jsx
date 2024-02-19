import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import styles from './NavMenu.module.css';

const NavMenu = () => {
  const { isLogin } = useAuth();
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
      </li>
      <li>
        {isLogin && (
          <NavLink className={styles.link} to="/Contacts">
            Contacts
          </NavLink>
        )}
      </li>
    </ul>
  );
};

export default NavMenu;
