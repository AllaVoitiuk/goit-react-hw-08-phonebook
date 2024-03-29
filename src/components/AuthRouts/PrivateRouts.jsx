import { useSelector } from 'react-redux';
import { selectUserToken } from 'redux/users/users.selector';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const token = useSelector(selectUserToken);
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
