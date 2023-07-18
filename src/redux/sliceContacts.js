import { createSlice, nanoid } from '@reduxjs/toolkit';

const savedContacts = localStorage.getItem('contacts');
const parsedContactInit = JSON.parse(savedContacts) || [];

const contactsInitialState = parsedContactInit;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        localStorage.setItem('contacts', JSON.stringify(state));
      },
      prepare(contact, number) {
        return {
          payload: {
            contact,
            id: nanoid(),
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(item => item.id === action.payload);
      state.splice(index, 1);

      localStorage.setItem('contacts', JSON.stringify(state));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
