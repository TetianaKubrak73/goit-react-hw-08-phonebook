import { Link } from 'react-router-dom';

import styles from './AppBar.module.css';
import MainMenu from 'components/NavigationMenu/NavigationMenu';

const Navbar = () => {
  return (
    <navbar className={styles.navbar}>
      <Link to="/">Home</Link>
      <MainMenu />
    </navbar>
  );
};

export default Navbar;
