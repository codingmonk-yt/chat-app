import { useTheme } from '@mui/material/styles';
import React from 'react';
import { faker } from '@faker-js/faker';
import {
  Avatar,
  Box,
  Stack,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react';
import StyledBadge from '../StyledBadge';
import { ToggleSidebar, UpdateSidebarType } from '../../redux/slices/app';
import { useDispatch } from 'react-redux';

export const Header = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Box
      p={2}
      sx={{
        width: '100%',
        backgroundColor:
          theme.palette.mode === 'light'
            ? '#F8faff'
            : theme.palette.background.paper,
        boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
      }}
    >
      <Stack
        alignItems={'center'}
        direction={'row'}
        justifyContent={'space-between'}
        sx={{ width: '100%', height: '100%' }}
      >
        <Stack
          onClick={() => {
            dispatch(ToggleSidebar);
            dispatch(UpdateSidebarType('CONTACT'));
          }}
          direction={'row'}
          spacing={2}
        >
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot"
            >
              <Avatar alt={'Avatar'} src={faker.image.avatar()} />
            </StyledBadge>
          </Box>
          <Stack spacing={0.2}>
            <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={3}>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};
