import { useSelector } from 'react-redux';
import {
  //   selectUser,
  //   selectIsLoggedIn,
  //   selectIsRefreshing,
  selectIsLogin,
  selectToken,
} from '../redux/auth/auth-selectors';

// Хук useAuth надає доступ до даних авторизації користувача
export const useAuth = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);
  //   const user = useSelector(selectUser);

  return {
    isLogin, // Показує, чи користувач авторизований
    token, // Показує, чи відбувається оновлення інформації про користувача
    // user, // Об'єкт, що містить дані авторизованого користувача
  };
};
