import PropTypes from 'prop-types';
import { Item, List } from './ContactList.styled';
import { ContactsItem } from 'components/ContactListItem/ContactListItem';

export function ContactList({ contacts }) {

    return (<List>{contacts.map(contact => <Item key={contact.id}><ContactsItem  contact={ contact } /></Item>)}</List>
        );
};
    
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
};