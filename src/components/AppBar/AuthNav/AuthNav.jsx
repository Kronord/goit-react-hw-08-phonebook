import { Link, BorderLink, Box } from './AuthNav.styled';

const AuthNav = () => { 
    return (
      <Box>
        <Link to="/signIn">Sign in</Link>
        <BorderLink to="/signUp">Sign up</BorderLink>
      </Box>
    );
};

export default AuthNav;