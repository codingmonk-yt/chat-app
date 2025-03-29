import { Box, IconButton, Stack, Typography } from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import React from 'react';
import ProfileForm from '../../sections/settings/ProfileForm';

const Profile = () => {
  return (
    <>
      <Stack direction={'row '} sx={{ width: '100%' }}>
        {/* left */}
        <Box
          sx={{
            height: '100vh',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? '#F8FAFF'
                : theme.palette.background,
            width: 320,
            boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
          }}
        >
          <Stack direction={'column'} spacing={5} p={4}>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
              <IconButton>
                <CaretLeft size={24} color={'#4b4b4b'} />
              </IconButton>
              <Typography variant="h5">Profile</Typography>
            </Stack>
            <ProfileForm />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
