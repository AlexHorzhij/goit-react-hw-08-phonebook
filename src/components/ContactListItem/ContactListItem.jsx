import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './ContactsListItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operationContacts';
import { Oval } from 'react-loader-spinner';
import { useState } from 'react';
import { selectContacts } from 'redux/contacts/selectorsContacts';
import { EditContactModal } from "../EditContactModal/EditContactModal";
import { setEditedContact } from "../../redux/contacts/contactsSlice";
import { showContactEditorSet } from '../../redux/contacts/contactsSlice';
import { selectshowContactEditor } from 'redux/contacts/selectorsContacts';

export function ContactsItem({ contact }) {
    const modalIsVisible = useSelector(selectshowContactEditor);


    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts)
    const [loader, setloader] = useState("");

    const editContact = (e) => {
        const editedContact = e.target.id;
        const contact = contacts.find((contact) => contact.id === editedContact)
        console.log(contact)
        dispatch(setEditedContact(contact));
        dispatch(showContactEditorSet(true));
    };
    
    const removeContact = (id) => {
        setloader(id)
        dispatch(deleteContact(id));
    };

    return <>{contact.name}:  {contact.number}
        <ButtonWrapper>{loader===contact.id && <Oval
            height={20}
            width={20}
            marginRight={10}
            color="#223c26"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4c714c"
            strokeWidth={5}
            strokeWidthSecondary={5}/>}  
            <Button id={contact.id} onClick={editContact}>Edit</Button>
            <Button  onClick={()=>removeContact(contact.id)}>Delete</Button>
            {modalIsVisible && <EditContactModal />}

        </ButtonWrapper>
    </>
};
    
ContactsItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
};


 