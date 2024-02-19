// import { Link } from 'react-router-dom';
import { AuthNav } from './AuthNav/AuthNav';
import styles from './AppBar.module.css';
import NavMenu from 'components/AppBar/NavMenu/NavMenu';
import { UserMenu } from 'components/AppBar/UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';
const AppBar = () => {
  const { isLogin } = useAuth();
  return (
    <div className={styles.navbar}>
      <NavMenu />
      {isLogin ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
