import { useAuth } from '../hooks/useAuth';
import {
  // Outlet,
  Navigate,
} from 'react-router-dom';
import Loader from './Loader/Loader';

export const PrivateRoute = () => {
  const { isLogin, token } = useAuth();
  if (!isLogin && token) {
    return <Loader />;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }

  //   return <Outlet />;
};

export default PrivateRoute;
