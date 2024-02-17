import { useAuth } from '../hooks/useAuth';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoute = () => {
  const { isLogin, token } = useAuth();
  if (!isLogin && token) {
    return <p>...Loading</p>;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
