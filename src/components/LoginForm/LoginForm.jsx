// import { useDispatch } from 'react-redux';
import { useState, useId } from 'react';
// import { login } from '../../redux/auth/auth-operations';
import styles from './LoginForm.module.css';

// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       login({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

const INITIAL_STATE = {
  email: '',
  password: '',
};
const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

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
    onSubmit({ ...state });
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
      <button type="submit">LogIn</button>
    </form>
  );
};
export default LoginForm;
