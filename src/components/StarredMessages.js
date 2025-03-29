import { Box, Stack, Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { UpdateSidebarType } from '../redux/slices/app';
import { CaretLeft } from 'phosphor-react';
import Message from './Conversation/Message';

const StarredMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: 320, height: '100vh' }}>
      <Stack sx={{ height: '100%' }}>
        {/**header */}
        <Box
          sx={{
            boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
            width: '100%',
            backgroundColor:
              theme.palette.mode === 'light'
                ? '#F8FAFF'
                : theme.palette.background.paper,
          }}
        >
          <Stack
            sx={{ height: '100%', p: 2 }}
            direction={'row'}
            alignItems={'center'}
            spacing={1}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType('CONTACT'));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Starrted messages</Typography>
          </Stack>
        </Box>

        {/**Body */}
        <Stack
          sx={{
            height: '100%',
            position: 'relative',
            flexGrow: 1,
            overflow: 'scroll',
          }}
          p={3}
          spacing={2}
        >
          <Message />
        </Stack>
      </Stack>
    </Box>
  );
};

export default StarredMessages;
