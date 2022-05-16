import { createSlice } from '@reduxjs/toolkit';
import * as contactsOperations from './Contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { entities: [], loading: 'idle' },
  extraReducers: {
    [contactsOperations.getContacts.fulfilled](state, { payload }) {
      state.entities = payload;
      state.loading = 'succeeded';
    },
    [contactsOperations.getContacts.pending](state) {
      state.loading = 'pending';
    },
    [contactsOperations.getContacts.rejected](state) {
      state.loading = 'failed';
    },
    [contactsOperations.createContact.fulfilled](state, { payload }) {
      if (payload !== undefined) {
        state.entities.push(payload);
      }
      state.loading = 'succeeded';
    },
    [contactsOperations.createContact.pending](state) {
      state.loading = 'adding';
    },
    [contactsOperations.deleteContact.fulfilled](state, { payload }) {
      state.loading = 'succeeded';
      const indOfDeleteContact = state.entities.indexOf(
        state.entities.find(contact => contact.id === payload)
      );
      state.entities.splice(indOfDeleteContact, 1);
    },
    [contactsOperations.deleteContact.pending](state) {
      state.loading = 'delete';
    },
  },
});

export default contactsSlice.reducer;
