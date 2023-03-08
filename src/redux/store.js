import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts.slice';

export const store = configureStore({
  devTools: true,
  reducer: {
    contacts: contactsReducer,
  },
});
