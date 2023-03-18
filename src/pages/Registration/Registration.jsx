import { useState } from 'react';
import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/users/users.operations';
import { Form, Label, Input } from './Registration.styled';
import { useNavigate } from 'react-router-dom';

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
const initialState = {
  name: '',
  email: '',
  password: '',
};

const formReducer = (state, { type, payload }) => {
  return (state = { ...state, [type]: payload });
};

const Registration = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [state, reducerDispatch] = useReducer(formReducer, initialState);
  const { name, email, password } = state;
  const navigate = useNavigate();

  const handleChange = event => {
    const { value, name } = event.target;
    reducerDispatch({ type: name, payload: value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const registrationForm = evt.currentTarget;
    setIsLoading(true);
    dispatch(
      registerUser({
        name: registrationForm.elements.name.value,
        email: registrationForm.elements.email.value,
        password: registrationForm.elements.password.value,
      })
    );

    setIsLoading(false);
    navigate('/login', { replace: true });
    reducerDispatch({ type: 'name', payload: '' });
    reducerDispatch({ type: 'email', payload: '' });
    reducerDispatch({ type: 'password', payload: '' });
  };
  return (
    <>
      {isLoading && <p>Loading ...</p>}
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name
          <Input type="name" name="name" value={name} onChange={handleChange} />
        </Label>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <Button
            type="submit"
            variant="contained"
            endIcon={<HowToRegRoundedIcon />}
          >
            Registration
          </Button>
        </Stack>
      </Form>
    </>
  );
};

export default Registration;
