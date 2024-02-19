import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operations';
import { selectUser } from '../../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrap}>
      <p className={styles.text}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
