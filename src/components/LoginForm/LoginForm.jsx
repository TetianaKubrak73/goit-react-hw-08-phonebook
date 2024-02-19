import { useDispatch } from 'react-redux';
import { useState, useId } from 'react';
import { login } from '../../redux/auth/auth-operations';
import styles from './LoginForm.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};
const LoginForm = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;

    setState({
      ...state,
      [name]: newValue,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(state));
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const emailId = useId();
  const passwordId = useId();

  const { email, password } = state;

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor={emailId} className={styles.label}>
        Email
        <input
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id={emailId}
          required
        />
      </label>
      <label htmlFor={passwordId} className={styles.label}>
        Password
        <input
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          id={passwordId}
          required
        />
      </label>
      <button className={styles.button} type="submit">
        LogIn
      </button>
    </form>
  );
};
export default LoginForm;
