import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import styles from './Layout.module.css';
import Loader from '../Loader/Loader';

export const Layout = () => {
  return (
    <div className={styles.box}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
