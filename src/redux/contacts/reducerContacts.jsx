// import { createReducer } from "@reduxjs/toolkit";
// import actions from "./actionsContacts";

// const initialState = {
//         items: [],
//         isLoadingFetch: false,
//         isLoadingAdd: false,
//         isLoadingDelete: false,
//         showModal: false,
//         editedContact: {},
//         error: null
// };

// export const contactsReducers = createReducer(initialState, {
//         [actions.fetchCotactsLoading]: (store) => {
//                 store.isLoadingFetch = true;
//                 store.error = null;
//         },
//         [actions.fetchCotactsSuccess]: (store, { payload }) => {
//                 store.isLoadingFetch = false;
//                 store.items = payload;
//         },
//         [actions.fetchCotactsError]: (store, { payload }) => {
//                 store.isLoadingFetch = false;
//                 store.error = payload;
//         },
//         [actions.addContactsLoading]: (store) => {
//                 store.isLoadingAdd = true;
//                 store.error = null;
//         },
//         [actions.addContactsSuccess]: (store, { payload }) => {
//                 store.isLoadingAdd = false;
//                 store.items.push(payload);
//         },
//         [actions.addContactsError]: (store, { payload }) => {
//                 store.isLoadingAdd = false;
//                 store.error = payload;
//         },
//         [actions.removeContactsLoading]: (store) => {
//                 store.isLoadingDelete = true;
//                 store.error = null;
//         },
//         [actions.removeContactsSuccess]: (store, { payload }) => {
//                 store.isLoadingDelete = false;
//                 store.items = store.items.filter((item) => item.id !== payload);
//         },
//         [actions.removeContactsError]: (store, { payload }) => {
//                 store.isLoadingDelete = false;
//                 store.error = payload;
//         },
// });