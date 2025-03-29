import React, { useState } from 'react';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from '../../components/Search';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { CallLogs, ChatList } from '../../data';
import { SimpleBarStyle } from '../../components/Scrollbar';
import ChatElement from '../../components/ChatElement';
import CreateGroup from '../../sections/main/CreateGroup';
import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { CallElement, CallLogElement } from '../../components/CallElement';
import StartCall from '../../sections/main/StartCall';

const Call = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
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
          <Stack
            direction={'column'}
            spacing={2}
            p={2}
            sx={{ maxHeight: '100vh' }}
          >
            <Stack>
              <Typography variant="h5">Call Logs</Typography>
            </Stack>
            <Stack sx={{ width: '100%' }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color={'#709ce6'} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search..."
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Stack>

            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Typography
                varient="subtitle2"
                component={Link}
                sx={{
                  color: theme.palette.primary.main,
                  textDecoration: 'none',
                  fontWeight: 700,
                }}
              >
                Start new call
              </Typography>
              <IconButton onClick={() => setOpenDialog(true)}>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              spacing={0}
              direction={'column'}
              sx={{ flexGrow: 1, overflow: 'auto', height: '100%' }}
            >
              <SimpleBarStyle timeout={200} clickOnTrack={false}>
                <Stack spacing={1.5}>
                  <Typography variant="subtitle2" sx={{ color: '#676767' }}>
                    All Calls
                  </Typography>
                  {/* call logs */}

                  {CallLogs.map((el) => {
                    return <CallElement {...el} />;
                  })}
                </Stack>
              </SimpleBarStyle>
            </Stack>
          </Stack>
        </Box>

        {/* right */}
        {/* TODO reuse Chat Component */}
      </Stack>
      {openDialog && (
        <StartCall open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Call;
