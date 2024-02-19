import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import { useState, useId } from 'react';
import styles from './RegisterForm.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
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
    dispatch(signup(state));
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const { name, email, password } = state;

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.block}>
        <label htmlFor={nameId}>
          Name:
          <input
            value={name}
            onChange={handleChange}
            id={nameId}
            type="text"
            name="name"
            placeholder="Введіть ім'я"
            pattern="^[^\d]+$"
            required
          />
        </label>
      </div>
      <div className={styles.block}>
        <label htmlFor={emailId}>
          Email:
          <input
            value={email}
            onChange={handleChange}
            id={emailId}
            type="email"
            name="email"
            placeholder="Введіть адресу електронної пошти"
            // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>
      </div>
      <div className={styles.block}>
        <label htmlFor={passwordId}>
          Password:
          <input
            value={password}
            onChange={handleChange}
            id={passwordId}
            type="password"
            name="password"
            placeholder="Введіть пароль"
            // pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            required
          />
        </label>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};
export default RegisterForm;
