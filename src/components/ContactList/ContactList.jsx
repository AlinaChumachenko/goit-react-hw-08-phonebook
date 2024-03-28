import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return contacts.length > 0 ? (
    <ul className={css.list}>
      {contacts.map(({ name, _id, number }) => (
        <ContactItem key={_id} name={name} id={_id} phone={number} />
      ))}
    </ul>
  ) : (
    <p>This contact does not exist</p>
  );
};

export default ContactList;
