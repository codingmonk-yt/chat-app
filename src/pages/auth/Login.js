import { Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AuthSocial from '../../sections/auth/AuthSocial';
import LoginForm from '../../sections/auth/LoginForm';

const Login = () => {
  return (
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
      <Typography variant="h6">Login here</Typography>

      <Stack direction={'row'} spacing={0.5}>
        <Typography variant="body2">New user? </Typography>
        <Link to="/auth/register" component={RouterLink} variant="subtitle2">
          Create an account
        </Link>
      </Stack>

      {/**Login form */}
      <LoginForm />

      {/**auth social */}
      <AuthSocial />
    </Stack>
  );
};

export default Login;
