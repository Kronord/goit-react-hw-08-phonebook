import { useSelector, useDispatch } from "react-redux";
import * as authOperations from '../../Redux/Auth/auth-operations';
import { Wrapper, StyledButton } from "./UserMenu.styled";
import { FcBusinessman } from 'react-icons/fc';

const UserMenu = () => { 
    const dispatch = useDispatch();
    const name = useSelector(store => store.auth.user.name);
    return (
      <Wrapper>
        <FcBusinessman style={{
          fontSize: 50,
          marginRight: '20px',
        }}/>
        <h3>Welcome {name}</h3>
        <StyledButton
          variant="contained"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log Out
        </StyledButton>
      </Wrapper>
    );
};

export default UserMenu;