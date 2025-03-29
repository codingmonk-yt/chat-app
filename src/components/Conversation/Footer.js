import {
  Box,
  Stack,
  IconButton,
  TextField,
  InputAdornment,
  Fab,
  Tooltip,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import {
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  Camera,
  File,
  User,
} from 'phosphor-react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useState } from 'react';

const StyledInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    paddingTop: '12px',
    paddingBottom: '12px',
  },
}));

const Actions = [
  {
    color: '#4da5fe',
    icon: <Image size={24} />,
    y: 102,
    title: 'Photo / Video',
  },
  { color: '#1b8cfe', icon: <Sticker size={24} />, y: 172, title: 'Stikers' },
  { color: '#0172e4', icon: <Camera size={24} />, y: 242, title: 'Camera' },
  { color: '#013f7f', icon: <File size={24} />, y: 312, title: 'File' },
  { color: '#4da5fe', icon: <User size={24} />, y: 382, title: 'contact' },
];
const ChatInput = ({ setOpenPicker }) => {
  const [openActions, setOpenActions] = useState(false);
  return (
    <StyledInput
      fullWidth
      placeholder="Write a message..."
      variant="filled"
      InputProps={{
        disableUnderline: true,

        startAdornment: (
          <Stack sx={{ widht: 'max-content' }}>
            <Stack
              sx={{ position: 'relative' }}
              display={openActions ? 'inline-block' : 'none'}
            >
              {Actions.map((el) => (
                <Tooltip title={el.title} placement="right">
                  <Fab
                    sx={{
                      position: 'absolute',
                      top: -el.y,
                      backgroundColor: el.color,
                    }}
                  >
                    {el.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment>
              <IconButton
                onClick={() => {
                  setOpenActions((prev) => !prev);
                  setOpenPicker(false);
                }}
              >
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment>
            <IconButton
              onClick={() => {
                setOpenPicker((prev) => !prev);
                setOpenActions(false);
              }}
            >
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const Footer = (props) => {
  const theme = useTheme();
  const [openPicker, setOpenPicker] = useState(false);
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
      <Stack direction={'row'} alignItems={'center'} spacing={2}>
        <Stack sx={{ width: '100%' }}>
          {/* Chatinput */}
          <Box
            sx={{
              display: openPicker ? 'inline' : 'none',
              zIndex: 10,
              position: 'fixed',
              bottom: 81,
              right: 100,
            }}
          >
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>
          <ChatInput setOpenPicker={setOpenPicker} />
        </Stack>
        <Box
          sx={{
            height: 48,
            width: 55,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{ height: '100%', width: '100%' }}
            alignItems="center"
            justifyContent="center"
          >
            <IconButton>
              <PaperPlaneTilt color="white" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
