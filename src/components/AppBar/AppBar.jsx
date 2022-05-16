import { Wrapper, Box } from './AppBar.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AuthNav from './AuthNav/AuthNav';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { SpinnerDotted } from 'spinners-react';

export default function AppBar() {
  const isLogged = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <Wrapper>
        <Navigation />
        {isLogged ? <UserMenu /> : <AuthNav />}
      </Wrapper>
      <Suspense
        fallback={
          <Box>
            <SpinnerDotted
              size={70}
              thickness={100}
              speed={121}
              color="rgba(57, 119, 172, 1)"
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}
