import { Stack, Typography } from '@mui/material';
import { CheckCircle } from 'phosphor-react';
import React from 'react';
import VerifyForm from '../../sections/auth/VerifyForm';
import { useSelector } from 'react-redux';

const Verify = () => {
  const { email } = useSelector((state) => state.auth);
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
        <Typography variant="h4" align="center">
          Please verify OTP
        </Typography>

        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          spacing={0.5}
        >
          <CheckCircle color="green" />
          <Typography variant="subtitle2" color={'green'}>
            Email sent to <b>{email}</b>
          </Typography>
        </Stack>

        {/* verify form here */}
        <VerifyForm />
      </Stack>
    </>
  );
};

export default Verify;
