import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SpinnerDotted } from 'spinners-react';
import ListItem from '../ListItem/ListItem';
import { useDispatch } from 'react-redux';
import * as contactsOperations from 'components/Redux/Contacts/Contacts-operations';
import { List, Box } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const dataState = useSelector(state => state.contacts.entities);
  const filterState = useSelector(state => state.filter);
  const loading = useSelector(state => state.contacts.loading);

  useEffect(() => {
    dispatch(contactsOperations.getContacts(''));
  }, [dispatch]);

  if (loading === 'succeeded' || loading === 'delete' || loading === 'adding') {
    const normalizedFilter = filterState.toLowerCase();
    const filterContacts = dataState.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <List>
        {filterContacts.map(({ name, id, number }) => (
          <ListItem key={id} name={name} number={number} id={id} />
        ))}
      </List>
    );
  }

  if (loading === 'pending') {
    return (
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
    );
  }

  if (loading === 'failed') {
    return <h1>Contacts not found</h1>;
  }
};

export default ContactList;
