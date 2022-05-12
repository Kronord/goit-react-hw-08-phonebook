import { ToastContainer } from 'react-toastify';
import { ContactForm } from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Wrapper } from './Contacts.styled';


export default function Contacts() {
  return (
    <Wrapper>
      <Filter />
      <ContactList />
      <ContactForm />
      <ToastContainer />
    </Wrapper>
  );
}
