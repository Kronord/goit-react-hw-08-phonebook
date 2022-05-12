import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

const getContacts = createAsyncThunk('contacts/get', async () => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) {
        return toast.error(`Error, please try again`);
    }
});

const createContact = createAsyncThunk('contacts/create', async contactData => {
    try {
        const { data } = await axios.post('/contacts', contactData);
        toast.success(`${contactData.name} added to Phonebook`);
        return data;
    } catch (error) {
       return toast.error(`Error, please try again`);
    }
});

const deleteContact = createAsyncThunk('contacts/delete', async ({id, name}) => { 
    try {
        await axios.delete(`/contacts/${id}`);
        toast.success(`${name} has been removed from the Phonebook`);
        return id;
    } catch (error) {
        return toast.error(`Error, please try again`);
    }
});

export { getContacts, createContact, deleteContact };