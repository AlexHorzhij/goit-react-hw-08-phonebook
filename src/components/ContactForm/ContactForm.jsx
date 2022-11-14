import { Form, FormTitle, FormInput, SubmitButton } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operationContacts';
import { selectContacts } from 'redux/contacts/selectorsContacts';
import toast, { Toaster } from 'react-hot-toast';
import { isLoadingAdd } from 'redux/contacts/selectorsContacts';
import { Oval } from 'react-loader-spinner';

export function ContactForm() {
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(isLoadingAdd);
    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const newContactName = form.elements.name.value;
        const newContactNumber = form.elements.number.value;

        const isDublicate = contacts.find(item => {
            return item.name.toLowerCase() === newContactName.toLowerCase()
        });
        
        if (isDublicate) {
            return toast.error(`${newContactName} is alrady in contacts`);
        };
        const newContact = { name: newContactName, number: newContactNumber, };
        dispatch(addContact(newContact));
        form.reset();
    };
    
    return <>
        <Form onSubmit={submitForm}>
            <FormTitle> Name </FormTitle>
            <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
            <FormTitle> Number </FormTitle>
            <FormInput
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            
            <SubmitButton type='submit'>{ isLoading && <Oval
            height={18}
            width={18}
            marginRight={10}
            color="#253c28"
            position="absolut"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#787b78"
            strokeWidth={5}
                strokeWidthSecondary={5} />}   Add contact</SubmitButton>
        </Form>
        <Toaster toastOptions={{style: { fontSize: '24px', }}} />
    </>
};
