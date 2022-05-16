import { ContactForm } from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Wrapper } from './Contacts.styled';
import { useSelector } from 'react-redux';

export default function Contacts() {
  const contactsState = useSelector(state => state.contacts.entities);
  return (
    <Wrapper>
      {contactsState.length > 0 && <Filter />}
      <ContactList />
      <ContactForm />
    </Wrapper>
  );
}
