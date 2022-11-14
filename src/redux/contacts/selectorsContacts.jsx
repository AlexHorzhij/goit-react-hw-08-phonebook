export const selectContacts = (state) => state.contacts.items;
export const isLoadingFetch = (state) => state.contacts.isLoadingFetch;
export const isLoadingAdd = (state) => state.contacts.isLoadingAdd;
export const isLoadingDelete = (state) => state.contacts.isLoadingDelete;
export const selectEditedContact = (state) => state.contacts.editedContact;
export const selectshowContactEditor = (state) => state.contacts.showContactEditor;