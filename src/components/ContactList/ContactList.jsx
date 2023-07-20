import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  //Funkcja filtruje kontakty na podstawie przekazanej tablicy (contacts) i stringa (filter)
  const filteredContacts = contacts.items.filter(item =>
    item.contact.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(item => (
        <li className={css.item_contact} key={item.id}>
          {item.contact}: {item.number}
          <button
            type="button"
            name={item.contact}
            onClick={() => dispatch(deleteContact(item.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
