import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, updateContact } from './operationContacts';

const initialState = {
        items: [],
        isLoadingFetch: false,
        isLoadingAdd: false,
        isLoadingDelete: false,
        error: null,
        editedContact: {},
        showContactEditor: false,
};

export const contactsSlice = createSlice({
        name: 'contacts',
        initialState,
        reducers: {
                setEditedContact: (store, action) => {
                return { ...store, editedContact: action.payload };
                },
                showContactEditorSet: (store, { payload }) => {
                store.showContactEditor = payload;
                },
        },
        extraReducers: {
                [fetchContacts.pending]: (store) => {
                store.isLoadingFetch = true;
                store.error = null;
                },
                [fetchContacts.fulfilled]: (store, {payload}) => {
                        store.isLoadingFetch = false;
                        store.items = payload;
                },
                [fetchContacts.rejected]: (store, {payload}) => {
                        store.isLoadingFetch = false;
                        store.error = payload;
                },        
                [addContact.pending]: (store) => {
                        store.isLoadingAdd = true;
                        store.error = null;
                },
                [addContact.fulfilled]: (store, { payload }) => {
                store.isLoadingAdd = false;
                store.items.unshift(payload);
                },
                [addContact.rejected]: (store, {payload}) => {
                        store.isLoadingAdd = false;
                        store.error = payload;
                },
                [deleteContact.pending]: (store) => {
                        store.isLoadingDelete = true;
                        store.error = null;
                },
                [deleteContact.fulfilled]: (store,  {payload} ) => {
                        store.isLoadingDelete = false;
                        store.items = store.items.filter((item)=>item.id !== payload.id);
                },
                [deleteContact.rejected]: (store, {payload}) => {
                        store.isLoadingDelete = false;
                        store.error = payload;
                },
                [updateContact.pending]: (store) => {
                        store.isLoadingFetch = true;
                        store.error = null;
                },
                [updateContact.fulfilled]: (store, { payload }) => {
                        store.isLoadingFetch = false;
                        store.items = store.items.map((item) => item.id === payload.id ? item = payload : item);
                },
                [updateContact.rejected]: (store, {payload}) => {
                        store.isLoadingFetch = false;
                        store.error = payload;
                },
        },
});

export default contactsSlice.reducer;

export const { setEditedContact, showContactEditorSet } = contactsSlice.actions;