import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from 'redux/contacts/operationContacts';
import { selectContacts } from 'redux/contacts/selectorsContacts';
import { selectFilter } from 'redux/filter/selectorsFilter';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Logout } from 'components/UserMenu/Logout/Logout';
import { Container, Typography, Divider } from '@mui/material';

export function Contacts() {
    const filter = useSelector(selectFilter);
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchContacts())
    }, [dispatch]);

    const filtredList = () => {
        return filter ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())) : '';
    };

    const contactsCount = () => {
        return contacts.length;
    };

    return <>
        <Logout/>
        <Container maxWidth="sm" sx={{mt:10}}>
            <Typography component="h2" variant="h4" sx={{mt:3, mb:2}}>Phonebook</Typography>
            <ContactForm />
        </Container>
        <Container maxWidth="sm">
            <Typography component="h2" variant="h4" sx={{mt:3, mb:2}}>Contacts</Typography>
            <Filter />

            <Typography component="h3" variant="h6" >You have <b>{contactsCount()}</b> contacts.</Typography>
            <Divider />
            {(filter && (filtredList().length !== 0 
            ? <ContactList contacts={filtredList()}  />
            : <Typography component="h2" variant="h3" sx={{mt:3, mb:2}}>Сontact was not found</Typography>)) ||
            (contacts.length === 0 ? <Typography component="h2" variant="h3" sx={{mt:3, mb:2}}>You don't have any contact</Typography>
            : <ContactList />)
            }
        </Container>
    </>
};