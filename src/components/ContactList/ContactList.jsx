import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operationContacts';
import { selectContacts, selectshowContactEditor } from 'redux/contacts/selectorsContacts';
import { EditContactModal } from "../EditContactModal/EditContactModal";
import { setEditedContact, showContactEditorSet } from "../../redux/contacts/contactsSlice";
import { Typography, Grid, List, ListItem, IconButton, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export function ContactList() {
    const modalIsVisible = useSelector(selectshowContactEditor);

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts)
    const [loader, setloader] = useState("");

    const editContact = (e) => {
        const editedContact = e.currentTarget.id;
        const contact = contacts.find((contact) => contact.id === editedContact)
        dispatch(setEditedContact(contact));
        dispatch(showContactEditorSet(true));
    };
    
    const removeContact = (id) => {
        setloader(id)
        dispatch(deleteContact(id));
    };

    return <Grid item xs={12} md={6}>
        <List >
            {contacts.map(contact => <ListItem key={contact.id} sx={{ pl: 0, pr: 0 }} secondaryAction={<div>
                {loader === contact.id && <CircularProgress size='1.5rem' sx={{ml:2}} />}
                <IconButton edge="end" aria-label="edit" sx={{mr:1}} id={contact.id} onClick={editContact}>
                    <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={()=>removeContact(contact.id)}>
                    <DeleteIcon />
                </IconButton>
                
            </div>} >
                <Typography component="p" variant="body1" sx={{width:200}}>{contact.name}</Typography>
                <Typography component="p" variant="body1">{contact.number}</Typography>
                
            </ListItem> 
            )}
        </List>
        
        {modalIsVisible && <EditContactModal />}
    </Grid>
};















// import PropTypes from 'prop-types';
// // import { Item, List } from './ContactList.styled';
// import { ContactsItem } from 'components/ContactListItem/ContactListItem';

// import { Typography, Grid, List} from '@mui/material';

// export function ContactList({ contacts }) {

//     return <ContactsItem contacts={ contacts} />
    
    
    
    
    
    
    
    
//     // (<List>{contacts.map(contact => <Item key={contact.id}><ContactsItem contact={contact} /></Item>)}</List>
//     //     );
// };
    
// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     })).isRequired,
// };