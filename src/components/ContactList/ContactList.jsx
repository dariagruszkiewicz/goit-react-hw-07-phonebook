import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/operations';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
  selectError,
} from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  //Funkcja filtruje kontakty na podstawie przekazanej tablicy (contacts) i stringa (filter)
  const filteredContacts = contacts.filter(item =>
    item.contact.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul>
      {isLoading && !error && <p>Is loading...</p>}
      {error && <p>{error}</p>}
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
