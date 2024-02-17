import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import Loader from './Loader/Loader';

export const RestrictedRoute = ({ redirectTo, component: Component }) => {
  const { isLogin, token } = useAuth();

  if (!isLogin && token) {
    return <Loader />;
  }

  return isLogin ? <Navigate to={redirectTo} /> : Component;
};
