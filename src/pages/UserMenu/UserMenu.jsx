import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/users/users.selector';
import { logOut } from 'redux/users/users.operations';
import { Link } from 'react-router-dom';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Div, P } from './UserMenu.styled';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="baseline"
      spacing={2}
    >
      <Div>
        <P>
          <IconButton color="primary" size="small">
            <Fingerprint />
          </IconButton>{' '}
          {user.email}
        </P>
        <Button
          type="button"
          variant="outlined"
          endIcon={<LogoutIcon />}
          onClick={() => dispatch(logOut())}
        >
          {' '}
          <Link to="/login">Log out</Link>
        </Button>
      </Div>
    </Stack>
  );
};
