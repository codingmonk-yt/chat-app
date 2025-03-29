import {
  Box,
  IconButton,
  Stack,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { ChatList } from '../../data/index';
import { SimpleBarStyle } from '../../components/Scrollbar';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from '../../components/Search';
import ChatElement from '../../components/ChatElement';

export const Chats = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: 320,
        backgroundColor:
          theme.palette.mode === 'light'
            ? '#F8FAFF'
            : theme.palette.background.paper,
        boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
      }}
    >
      <Stack p={3} spacing={3} sx={{ height: '100vh' }}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent="space-between"
        >
          <Typography variant="h5" fontStyle={'normal'} fontWeight={900}>
            Chats
          </Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
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
        <Stack spacing={1}>
          <Stack direction={'row'} spacing={1.5} alignItems={'center'}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack
          spacing={0}
          direction={'column'}
          sx={{ flexGrow: 1, overflow: 'auto', height: '100%' }}
        >
          <SimpleBarStyle timeout={200} clickOnTrack={false}>
            <Stack spacing={1.5}>
              <Typography variant="subtitle2" sx={{ color: '#676767' }}>
                Pinned
              </Typography>

              {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </Stack>
            <br />
            <Stack spacing={1.5}>
              <Typography variant="subtitle2" sx={{ color: '#676767' }}>
                All chats
              </Typography>

              {ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  );
};
