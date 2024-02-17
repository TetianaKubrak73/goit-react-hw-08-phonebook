import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { current } from '../redux/auth/auth-operations';
import { useAuth } from '../hooks/useAuth';

const Home = lazy(() => import('../Pages/Home/Home'));
const Register = lazy(() => import('../Pages/Register'));
const Login = lazy(() => import('../Pages/Login'));
const Contacts = lazy(() => import('../Pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isLogin } = useAuth();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return isLogin ? (
    <p>Оновлення користувача...</p>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*Головна сторінка */}
          <Route index element={<Home />} />
          {/* Сторінка реєстрації користувача */}
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          {/* Сторінка входу користувача */}
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          {/* Сторінка контактів (доступна тільки для авторизованих користувачів) */}
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
        {/* Маршрут за замовчуванням (якщо ні один інший маршрут не співпадає) */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
export default App;
