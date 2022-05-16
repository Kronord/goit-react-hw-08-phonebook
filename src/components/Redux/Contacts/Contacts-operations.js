import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const errorNotify = () => toast.error(`Error, please try again`);

const getContacts = createAsyncThunk('contacts/get', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    errorNotify();
  }
});

const createContact = createAsyncThunk(
  'contacts/create',
  async (contactData, { rejectWithValue }) => {
    try {
      const { data } = await toast.promise(
        axios.post('/contacts', contactData),
        {
          pending: '"Please wait..."',
          success: `${contactData.name} added to Phonebook`,
          error: `Error, please try again`,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(undefined);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/delete',
  async ({ id, name }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      toast.success(`${name} has been removed from the Phonebook`);
      return id;
    } catch (error) {
      errorNotify();
    }
  }
);

export { getContacts, createContact, deleteContact };
