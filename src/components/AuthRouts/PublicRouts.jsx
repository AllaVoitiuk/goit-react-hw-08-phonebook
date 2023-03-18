import { useSelector } from 'react-redux';
import { selectUserToken } from 'redux/users/users.selector';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const token = useSelector(selectUserToken);
  return token ? <Navigate to="/contacts " replace /> : <Outlet />;
};
