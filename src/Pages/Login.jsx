import { useSelector, useDispatch } from 'react-redux';
import {
  selectAuthError,
  selectAuthLoading,
  selectIsLogin,
} from '../redux/auth/auth-selectors';
import { login } from '../redux/auth/auth-operations';
import LoginForm from '../components/LoginForm/LoginForm';
import { Navigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Login = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const isLogin = useSelector(selectIsLogin);

  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <h2>Login</h2>
      {authLoading && <Loader />}
      <LoginForm onSubmit={handleLogin} />
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </div>
  );
};
export default Login;
