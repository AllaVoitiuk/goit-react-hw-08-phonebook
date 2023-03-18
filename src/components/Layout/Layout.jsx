import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Layout = () => {
  return (
    <>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Navigation />
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
