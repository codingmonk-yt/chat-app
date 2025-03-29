import { Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import React from 'react';
import { CaretLeft } from 'phosphor-react';
import NewPasswordForm from '../../sections/auth/NewPasswordForm';

const NewPassword = () => {
  return (
    <>
      <Stack
        spacing={2}
        p={5}
        sx={{
          mb: 5,
          position: 'relative',
          boxShadow: '0px 8px 30px -8px rgba(0, 0, 0, 0.1)',
          borderRadius: 3,
        }}
      >
        <Typography variant="h6" paragraph>
          Reset password
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 5 }}>
          Please set your new password
        </Typography>
        {/**new password form */}

        <NewPasswordForm />

        <Link
          component={RouterLink}
          to={'/auth/login'}
          color="inherit"
          variant="subtitle2"
          sx={{
            mt: 3,
            mx: 'auto',
            alignItems: 'center',
            display: 'inline-flex',
          }}
        >
          <CaretLeft />
          Return to sign in
        </Link>
      </Stack>
    </>
  );
};

export default NewPassword;
