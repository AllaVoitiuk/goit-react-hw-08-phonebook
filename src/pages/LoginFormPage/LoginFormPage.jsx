import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/users/users.operations';
import { Form, Label, Input } from './LoginFormPage.styled';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const initialState = {
  email: '',
  password: '',
};

const formReducer = (state, { type, payload }) => {
  return (state = { ...state, [type]: payload });
};

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, reducerDispatch] = useReducer(formReducer, initialState);
  const { email, password } = state;

  const handleChange = ({ target: { name, value } }) => {
    reducerDispatch({ type: name, payload: value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    navigate('/contacts', { replace: true });

    reducerDispatch({ type: 'email', payload: '' });
    reducerDispatch({ type: 'password', payload: '' });
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
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
        <Button type="submit" variant="contained">
          Log In
        </Button>
      </Stack>
    </Form>
  );
};

export default LoginFormPage;
