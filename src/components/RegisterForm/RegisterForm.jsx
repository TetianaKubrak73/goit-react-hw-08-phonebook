import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import { useState, useId } from 'react';
import styles from './RegisterForm.module.css';

// Компонент RegisterForm відповідає за форму реєстрації нового користувача
// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = event => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     // Викликаємо дію signup з параметрами name, email та password, які отримуємо зі значень полів форми
//     dispatch(
//       signup({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset(); // Очищуємо значення полів форми після відправки
//   };
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
          title="Ім'я має містити лише літери, апострофи, дефіси та відступи"
          required
        />
      </label>
      <label htmlFor={emailId}>
        Email:
        <input
          value={email}
          onChange={handleChange}
          id={emailId}
          type="email"
          name="email"
          placeholder="Введіть адресу електронної пошти"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Будь ласка, введіть дійсну адресу електронної пошти"
          required
        />
      </label>
      <label htmlFor={passwordId}>
        Password:
        <input
          value={password}
          onChange={handleChange}
          id={passwordId}
          type="password"
          name="password"
          placeholder="Введіть пароль"
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="Пароль повинен містити тільки латинські літери (як великі, так і малі), цифри та інші символи"
          required
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
export default RegisterForm;
