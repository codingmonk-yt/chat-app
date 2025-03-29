import { Stack, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

import { CaretLeft } from 'phosphor-react';
import ResetPasswordForm from '../../sections/auth/RestPasswordForm';

const ResetPassword = () => {
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
          Forgot your password
        </Typography>

        <Typography sx={{ color: 'text.secondary', mb: 5 }}>
          Please enter the email address associated with your account and We
          will email you a link to reset your password.
        </Typography>
        {/** reset password form */}
        <ResetPasswordForm />
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

export default ResetPassword;
