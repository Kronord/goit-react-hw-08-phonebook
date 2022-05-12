import { Wrapper } from './AppBar.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AuthNav from './AuthNav/AuthNav';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export default function AppBar() {
  const isLogged = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <Wrapper>
        <Navigation />
        {isLogged ? <UserMenu /> : <AuthNav />}
      </Wrapper>
      <Suspense fallback={<h1>...Loading</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}
