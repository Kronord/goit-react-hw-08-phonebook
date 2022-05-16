import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from './Redux/Auth/auth-operations';
import AppBar from './AppBar/AppBar';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = lazy(() =>
  import('./Contacts/Contacts' /* webpackChunkName: 'Contacts' */)
);
const LogIn = lazy(() =>
  import('./LoginForm/LoginForm' /* webpackChunkName: 'LogIn' */)
);
const RegisterForm = lazy(() =>
  import('./RegisterForm/RegisterForm' /* webpackChunkName: 'RegisterForm' */)
);
const HomePage = lazy(() =>
  import('./HomePage/HomePage' /* webpackChunkName: 'HomePage' */)
);

export const App = () => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.auth.isLoggedIn);
  console.log(login);
  const isFetchingCurrentUser = useSelector(
    state => state.auth.isFetchingCurrentUser
  );
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<PublicRoute component={<HomePage />} />} />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<Contacts />} />}
            />
            <Route
              path="/signIn"
              element={<PublicRoute component={<LogIn />} restricted />}
            />
            <Route
              path="/signUp"
              element={<PublicRoute component={<RegisterForm />} restricted />}
            />
            <Route
              path="*"
              element={
                login ? <Navigate to={'/contacts'} /> : <Navigate to={'/'} />
              }
            />
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    )
  );
};
