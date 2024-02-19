import { useSelector, useDispatch } from 'react-redux';

import { signup } from '../redux/auth/auth-operations';

import {
  selectAuthLoading,
  selectAuthError,
} from '../redux/auth/auth-selectors';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import Loader from 'components/Loader/Loader';

const Register = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };
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
