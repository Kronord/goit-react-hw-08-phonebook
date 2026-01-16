import { useSelector, useDispatch } from 'react-redux';
import * as authOperations from '../../Redux/Auth/auth-operations';
import { Wrapper, StyledButton } from './UserMenu.styled';
import { FcBusinessman } from 'react-icons/fc';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.auth.user);
  const {name, _id} = user;
  
  return (
    <Wrapper>
        <FcBusinessman
          style={{
            fontSize: 50,
            marginRight: '20px',
          }}
        />
      <h3>Welcome {name}</h3>
      <StyledButton
        variant="contained"
        onClick={() => dispatch(authOperations.logOut({_id}))}
      >
        Log Out
      </StyledButton>
    </Wrapper>
  );
};

export default UserMenu;
