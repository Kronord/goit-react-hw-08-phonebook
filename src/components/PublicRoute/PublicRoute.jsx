import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute({
  component: routerComponent,
  restricted = false,
}) {
  const isLoggedin = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedin && restricted;

  return shouldRedirect ? <Navigate to={'/contacts'} /> : routerComponent;
}
