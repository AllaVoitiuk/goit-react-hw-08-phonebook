import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts.slice';
import { userReducer } from './users/users.slise';

export const store = configureStore({
  devTools: true,
  reducer: {
    contacts: contactsReducer,
    user: userReducer,
  },
});
