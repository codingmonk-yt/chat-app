import { faker } from '@faker-js/faker';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import StyledBadge from './StyledBadge';
import { ArrowDownLeft, Phone, VideoCamera } from 'phosphor-react';

const CallElement = ({ img, name, online, incoming, missed }) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          borderRadius: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? '#fff'
              : theme.palette.background.default,
        }}
        p={2}
      >
        {' '}
        <Stack
          direction="row"
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Stack direction="row" spacing={2} alignItems={'center'}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Avatar src={img} alt={name} />
              </StyledBadge>
            ) : (
              <Avatar src={img} alt={name} />
            )}

            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
              <Stack direction={'row'} spacing={1} alignItems={'center'}>
                {incoming ? (
                  <ArrowDownLeft color={missed ? 'red' : 'green'} />
                ) : (
                  <ArrowDownLeft color={missed ? 'red' : 'green'} />
                )}
                <Typography variant="caption">Yesterday 21:24</Typography>
              </Stack>
            </Stack>
          </Stack>
          <IconButton>
            <Phone color="green" />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

const CallLogElement = ({ name, img, online }) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          borderRadius: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? '#fff'
              : theme.palette.background.default,
        }}
        p={2}
      >
        {' '}
        <Stack
          direction="row"
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Stack direction="row" spacing={2} alignItems={'center'}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Avatar src={img} alt={name} />
              </StyledBadge>
            ) : (
              <Avatar src={img} alt={name} />
            )}

            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <IconButton>
              <Phone color="green" />
            </IconButton>
            <IconButton>
              <VideoCamera color="green" />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export { CallElement, CallLogElement };
