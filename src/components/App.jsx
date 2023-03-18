import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import FilterPage from 'pages/FilterPage/FilterPage';
import AddContactPage from 'pages/AddContactPage/AddContactPage';
import LoginFormPage from 'pages/LoginFormPage/LoginFormPage';
import Registration from 'pages/Registration/Registration';
import { UserMenu } from 'pages/UserMenu/UserMenu';
import { PublicRoute } from './AuthRouts/PublicRouts';
import { PrivateRoute } from './AuthRouts/PrivateRouts';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AddContactPage />} />

        <Route path="" element={<PrivateRoute />}>
          <Route path="filter" element={<FilterPage />} />
          <Route path="contacts" element={<UserMenu />} />
        </Route>

        <Route path="" element={<PublicRoute />}>
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<LoginFormPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
