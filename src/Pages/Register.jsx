import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signup } from '../redux/auth/auth-operations';

import {
  selectAuthLoading,
  selectAuthError,
  selectIsLogin,
} from '../redux/auth/auth-selectors';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import Loader from 'components/Loader/Loader';

const Register = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <h2>Registration</h2>
      {authLoading && <Loader />}
      <RegisterForm onSubmit={handleSignup} />
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </div>
  );
};
export default Register;
