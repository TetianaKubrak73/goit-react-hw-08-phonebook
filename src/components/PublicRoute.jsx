// import { useAuth } from '../hooks/useAuth';
import { useSelector } from 'react-redux';
import { selectIsLogin, selectToken } from '../redux/auth/auth-selectors';
import {
  // Outlet,
  Navigate,
} from 'react-router-dom';
import Loader from './Loader/Loader';

const PublicRoute = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  // return <Outlet />;
};
// export const PublicRoute = ({ redirectTo, component: Component }) => {
//   const { isLogin, token } = useAuth();

//   if (!isLogin && token) {
//     return <Loader />;
//   }

//   return isLogin ? <Navigate to={redirectTo} /> : Component;
// };
export default PublicRoute;
