import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  fetchContactDetails,
  deleteContact,
  addContact,
} from './contacts.operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
      })

      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
        state.contacts.error = null;
      })

      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })

      .addCase(fetchContactDetails.pending, state => {
        state.contacts.isLoading = true;
        state.filter = '';
      })

      .addCase(fetchContactDetails.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
      })

      .addCase(fetchContactDetails.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })

      .addCase(deleteContact.pending, state => {
        state.contacts.isLoading = true;
      })

      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          item => item.name !== payload.name
        );
      })

      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })

      .addCase(addContact.pending, state => {
        state.contacts.isLoading = true;
      })

      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.error = null;
        state.contacts.isLoading = false;
        state.contacts.items = [...state.contacts.items, payload];
      })

      .addCase(addContact.rejected, (state, { payload }) => {
        state.contacts.error = payload;
        state.contacts.isLoading = false;
      }),
});

export const contactsReducer = contactsSlice.reducer;
