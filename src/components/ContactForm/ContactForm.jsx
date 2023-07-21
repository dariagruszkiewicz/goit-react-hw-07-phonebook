import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const contact = e.target.elements.text.value;
    const number = e.target.elements.tel.value;
    const name = contacts.map(item => item.contact);
    if (name.includes(contact)) {
      alert(`${contact} is alredy in contacts.`);
    } else {
      dispatch(addContact({ contact, number }));
    }

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name
        <input
          type="text"
          name="text"
          pattern="^[A-Za-z.'\- ]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="tel"
          pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
