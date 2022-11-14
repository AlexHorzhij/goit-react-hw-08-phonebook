// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';
import { instanceContacts } from "services/Api/auth-service";

// https://6358e7a7ff3d7bddb99383fc.mockapi.io/api
// https://connections-api.herokuapp.com/

// const instanceContacts = axios.create({
//     baseURL: "https://6358e7a7ff3d7bddb99383fc.mockapi.io/api",
// });

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const { auth } = thunkAPI.getState();
            auth.token ? instanceContacts.defaults.headers.common['Authorization'] = auth.token
        : instanceContacts.defaults.headers.common['Authorization'] = '';
            const { data } = await instanceContacts.get("/contacts");
                        return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, { rejectWithValue }) => {
        try {
            console.log('newContact',newContact)
            const { data } = await instanceContacts.post("/contacts", newContact);
            console.log('data',data)
            toast.success("Contact added")
            return data;
        } catch (error) {
            rejectWithValue(error);
        }
    },
    // {
    //     condition: (data, { getState }) => {
    //         const { contacts } = getState();
            
    //         if (isDublicate(contacts, data)) {
    //             console.log(data)
    //             Notify.warning(`${data.name} is alrady in contacts`,
    //                  { timeout: 4000, position: 'center-top', width: '400px', fontSize: '28px' })
    //             return false;
    //         };
    //     },
    // },
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, {rejectWithValue}) => {
         try {
             const {data: deletedContact} = await instanceContacts.delete(`/contacts/${id}`);
             toast.success("Contact removed");
             return deletedContact;
        } catch (error) {
            rejectWithValue(error);
        }
    },
);

export const updateContact = createAsyncThunk(
    "contacts/editContact",
    async (updatedContact, { rejectWithValue }) => {
        try {
            const { data } = await instanceContacts.put(`/contacts/${updatedContact.id}`, updatedContact);
            toast.success("Contact apdated")
            console.log(data)
            return data;
        } catch (error) {
            rejectWithValue(error);
        }
    },

);













// export const getContacts = () => {
//     const foo = async (dispatch) => {
//         dispatch(actions.fetchCotactsLoading());
//         try {
//             const { data } = await instanceContacts.get("/contacts");
//             dispatch(actions.fetchCotactsSuccess(data));
//         } catch (error) {
//             dispatch(actions.fetchCotactsError(error))
//         }
//     };
//     return foo;
// };

// export const addContact = (newContact) => {
//     const foo = async (dispatch, getState) => {
//         dispatch(actions.addContactsLoading());
//         const {contacts} = getState();
//         if (isDublicate(contacts, newContact)) {
//             return Notify.warning(`${contacts.items.name} is alrady in contacts`,
//                 { timeout: 4000, position: 'center-top', width: '400px', fontSize: '28px' })
//         };

//         try {
//             const { data: result} = await instanceContacts.post("/contacts", newContact);
//             dispatch(actions.addContactsSuccess(result));
//         } catch (error) {
//             dispatch(actions.addContactsError(error));
//         }
//     };
//     return foo;
// };

// export const removeContact = (id) => {
//     const foo = async (dispatch) => {
//         dispatch(actions.removeContactsLoading());

//          try {
//             await instanceContacts.delete(`/contacts/${id}`);
//             dispatch(actions.removeContactsSuccess(id));
//         } catch (error) {
//             dispatch(actions.removeContactsError(error));
//         }
//     };
//     return foo;
// };