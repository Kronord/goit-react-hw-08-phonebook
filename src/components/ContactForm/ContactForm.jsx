import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SpinnerCircularSplit } from 'spinners-react';
import * as contactsOperations from '../Redux/Contacts/Contacts-operations';
import {
  StyledButton,
  Form,
  Input,
  SubmitButton,
  Title,
  Image
} from './ContactForm.styled';
import Modal from '@mui/material/Modal';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};

export const ContactForm = () => {
  const [newName, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();
  const contactsState = useSelector(state => state.contacts.entities);
  const loading = useSelector(state => state.contacts.loading);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhoneNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newObj = { id: nanoid(), name: newName, number: phoneNumber };
    if (
      contactsState.find(
        ({ name }) => name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      return toast.warn(`${newName} is already in contacts`);
    }
    dispatch(contactsOperations.createContact(newObj));
    setName('');
    setPhoneNumber('');
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <StyledButton variant="contained" onClick={handleOpen}>
        <AddCircleTwoToneIcon
          sx={{
            fontSize: 50,
          }}
        />
      </StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Image
            src="https://invent.kde.org/uploads/-/system/project/avatar/120/phonebook.svg.png"
            alt="phonebook"
          />
          <Title>Add contact to your personal PhoneBook</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              label="Name"
              variant="outlined"
              margin="normal"
              id={nameInputId}
              name="name"
              value={newName}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <Input
              label="Number"
              type="tel"
              variant="outlined"
              margin="normal"
              id={numberInputId}
              name="number"
              value={phoneNumber}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <SubmitButton
              type="submit"
              color="primary"
              variant="contained"
              disabled={loading === 'pending' ? true : false}
            >
              {loading === 'pending' ? (
                <SpinnerCircularSplit
                  size={25}
                  thickness={180}
                  speed={100}
                  color="rgba(57, 74, 172, 1)"
                  secondaryColor="rgba(0, 0, 0, 0.44)"
                />
              ) : (
                'Add Contact'
              )}
            </SubmitButton>
          </Form>
        </Box>
      </Modal>
    </div>
  );
};
