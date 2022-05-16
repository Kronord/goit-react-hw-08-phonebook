import { Link, Logolink } from './Navigation.styled';
import { useSelector } from 'react-redux';
import ContactsIcon from '@mui/icons-material/Contacts';

const Navigation = () => {
  const isLogged = useSelector(state => state.auth.isLoggedIn);
  return (
    <div>
      <Logolink to="/">My PhoneBook</Logolink>
      {isLogged && (
        <Link to="/contacts">
          <ContactsIcon /> Contacts
        </Link>
      )}
    </div>
  );
};

export default Navigation;
