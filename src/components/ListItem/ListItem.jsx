import propTypes from 'prop-types';
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { SpinnerCircularSplit } from 'spinners-react';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Item, Text, StyledButton } from './ListItem.styled';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../Redux/Contacts/Contacts-operations';

const ListItem = ({ name, number, id }) => {
  const [btnId, setBtnId] = useState(null);
  const loading = useSelector(state => state.contacts.loading);
  const dispatch = useDispatch();

  return (
    <Item>
      <Text>{name}:</Text>
      <Text>{number}</Text>
      <StyledButton
        onClick={() => {
          setBtnId(id)
          dispatch(contactsOperations.deleteContact({ id, name }))
        }}
        disabled={loading === 'delete' ? true : false}
      >
        {loading === 'delete' && btnId !== null ? (
          <SpinnerCircularSplit
            size={40}
            thickness={180}
            speed={100}
            color="rgba(57, 74, 172, 1)"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
        ) : (
            <DeleteTwoToneIcon sx={{
              fontSize: 50,
            }}/>
        )}
      </StyledButton>
    </Item>
  );
};

ListItem.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default ListItem;
