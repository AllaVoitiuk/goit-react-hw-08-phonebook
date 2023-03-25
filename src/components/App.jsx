import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import FilterPage from 'pages/FilterPage/FilterPage';
import AddContactPage from 'pages/AddContactPage/AddContactPage';
import LoginFormPage from 'pages/LoginFormPage/LoginFormPage';
import Registration from 'pages/Registration/Registration';
import { UserMenu } from 'pages/UserMenu/UserMenu';
import { PublicRoute } from './AuthRouts/PublicRouts';
import { PrivateRoute } from './AuthRouts/PrivateRouts';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from 'redux/users/users.operations';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<PrivateRoute />}>
            <Route index element={<AddContactPage />} />
            <Route path="filter" element={<FilterPage />} />
            <Route path="contacts" element={<UserMenu />} />
          </Route>

          <Route path="" element={<PublicRoute />}>
            <Route path="register" element={<Registration />} />
            <Route path="login" element={<LoginFormPage />} />
          </Route>
        </Route>
      </Routes>
    )
  );
};
