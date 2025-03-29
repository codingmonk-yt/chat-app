import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import { Sidebar } from './sidebar';
import { useSelector } from 'react-redux';

const DashboardLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }
  return (
    <>
      <Box>
        <Stack direction={'row'}>
          {/* sidebar */}
          <Sidebar />
          <Outlet />
        </Stack>
      </Box>
    </>
  );
};

export default DashboardLayout;
