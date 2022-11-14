import React from 'react';
import {Title, Section, Container, Message, ContactsCount} from './Contacts.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from 'redux/contacts/operationContacts';
import { ContactList } from '../ContactList/ContactList';
import { useEffect } from 'react';
import { selectContacts } from 'redux/contacts/selectorsContacts';
import { selectFilter } from 'redux/filter/selectorsFilter';
import { Logout } from 'components/UserMenu/Logout/Logout';


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

    return <Container>
        <Logout/>
        <Section>
            <Title>Phonebook</Title>
            <ContactForm />
        </Section>
        <Section>
            <Title>Contacts</Title>
            <Filter />
            <ContactsCount>You have {contactsCount()} contacts.</ContactsCount>
            {(filter && (filtredList().length !== 0 
            ? <ContactList contacts={filtredList()}  />
            : <Message>Сontact was not found</Message>)) ||
            (contacts.length === 0 ? <Message>You don't have any contact</Message>
            : <ContactList contacts={contacts} />)
            }
        </Section>
    </Container>
};