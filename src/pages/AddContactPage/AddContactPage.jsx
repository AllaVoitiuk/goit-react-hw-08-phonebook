import { nanoid } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts.operations';
import { Input, Form, Label} from './AddContactPage.styled';
import { selectContacts } from 'redux/contacts/contacts.selector';

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
  

const initState = {
  name: '',
  number: '',
  id: nanoid(),
};

const formReducer = (state, { type, payload }) => {
  return (state = { ...state, [type]: payload });
};

const AddContactPage = () => {
  const dispatch = useDispatch();
  const [state, reducerDispatch] = useReducer(formReducer, initState);

  const { name, number } = state;
  const contacts = useSelector(selectContacts);

  const handleChange = ({ target: { name, value } }) => {
    
    reducerDispatch({ type: name, payload: value });
  };

  const findDubleContact = name => {
    // console.log(contacts);
    const dubleContact = contacts.find(contact => contact.name === name);

    if (dubleContact) {
      return true;
    }
    return false;
  };

  const handleSubmit = async evt => {
    evt.preventDefault();

    if (findDubleContact(name)) {
      alert(`${name} is already in contacts`);
      reducerDispatch({ type: 'name', payload: '' });
      return false;
    }

    const contact = await dispatch(addContact(state)).unwrap();
    console.log(contact);

    reducerDispatch({ type: 'name', payload: '' });
    reducerDispatch({ type: 'phone', payload: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Phone
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <Stack direction="row" justifyContent="center" spacing={2}>
      <Button type="submit" variant="contained" endIcon={<PersonAddAltOutlinedIcon />}>Add contact</Button>
      </Stack>
    </Form>
  );
};

export default AddContactPage;
