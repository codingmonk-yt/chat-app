import { Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import RegisterForm from '../../sections/auth/RegisterForm';
import AuthSocial from '../../sections/auth/AuthSocial';

const Register = () => {
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
      <Typography variant="h6">Get started with DotTalk</Typography>

      <Stack direction={'row'} spacing={0.5}>
        <Typography variant="body2">
          Already have an account?
          {/* route to another page using Link in mui */}
          <Link component={RouterLink} to={'/auth/login'} variant="subtitle">
            {' '}
            Sign in
          </Link>
        </Typography>
      </Stack>
      {/* registe form */}
      <RegisterForm />

      <Typography
        component={'div'}
        sx={{
          color: 'text.secondary',
          mt: 3,
          typography: 'caption',
          textAlign: 'center',
        }}
      >
        {'By signing up, I agree to '}
        <Link underline="always" color={'text.primary'}>
          Terms of Services
        </Link>
        {' and '}
        <Link underline="always" color={'text.primary'}>
          Privacy Policy
        </Link>
      </Typography>
      <AuthSocial />
    </Stack>
  );
};

export default Register;
