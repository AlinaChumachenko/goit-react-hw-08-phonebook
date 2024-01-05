import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem.jsx';
import css from './ContactList.module.css';
import { selectVisibleContacts } from '../../redux/selectors.js';

const ContactList = () => {
  const listOfContact = useSelector(selectVisibleContacts);

  return listOfContact.length > 0 ? (
    <ul className={css.list}>
      {listOfContact.map(({ name, id, number }) => (
        <ContactItem key={id} name={name} id={id} number={number} />
      ))}
    </ul>
  ) : (
    <p>No contact exists</p>
  );
};

export default ContactList;
