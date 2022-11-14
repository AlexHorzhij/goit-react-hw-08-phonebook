import { Form, FormTitle, FormInput, SubmitButton, ButtonWrapper } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectorsContacts';
import toast, { Toaster } from 'react-hot-toast';
import { updateContact } from '../../redux/contacts/operationContacts';
import { selectEditedContact } from 'redux/contacts/selectorsContacts';
import { setEditedContact } from 'redux/contacts/contactsSlice';
import { showContactEditorSet } from 'redux/contacts/contactsSlice';

export function ModalForm() {
    const contacts = useSelector(selectContacts);
    const editedContact = useSelector(selectEditedContact);
    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const updateContactName = form.elements.name.value;
        const updateContactNumber = form.elements.number.value;

        const isDublicate = contacts.find(item => {
            return item.name.toLowerCase() === updateContactName.toLowerCase() && item.id !== editedContact.id
        });
        
        if (isDublicate) {
            return toast.error(`You have contact with name ${updateContactName}`);
        };
        const updatedContact = { name: updateContactName, number: updateContactNumber, id: editedContact.id, };
        dispatch(showContactEditorSet(false));
        dispatch(updateContact(updatedContact));
        form.reset();
    };

    const closeEdit = () => {
        dispatch(showContactEditorSet(false));
        dispatch(setEditedContact({}));
    }

    return <>
        <Form onSubmit={submitForm}>
            <FormTitle> Name </FormTitle>
            <FormInput
            type="text"
            name="name"
            defaultValue={editedContact.name}    
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
            <FormTitle> Number </FormTitle>
            <FormInput
                type="tel"
                name="number"
                defaultValue={editedContact.number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            <ButtonWrapper>
                <SubmitButton type='submit'>Save</SubmitButton>
                <SubmitButton type='button' onClick={closeEdit}>Cancel</SubmitButton>
            </ButtonWrapper>
        </Form>
        <Toaster toastOptions={{style: { fontSize: '24px', }}} />
    </>
};
