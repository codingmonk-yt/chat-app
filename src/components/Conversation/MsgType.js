import {
  Divider,
  Stack,
  Typography,
  Box,
  Link,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DotsThreeVertical, DownloadSimple, Image } from 'phosphor-react';
import { Message_options } from '../../data/index';
import { useState } from 'react';

const DocMsg = ({ el, menu }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={'row'}
      justifyContent={el.incoming ? 'start' : 'end'}
      alignItems={'start'}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content', // content eke max width ekt ynna
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction={'row'}
            spacing={3}
            alignItems={'center'}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Image size={48} />
            <Typography variant="caption">Abstract.jpg</Typography>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : '#fff'}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
      {menu && <MessageOptions />}
    </Stack>
  );
};

const LinkMsg = ({ el, menu }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={'row'}
      justifyContent={el.incoming ? 'start' : 'end'}
      alignItems={'start'}
    >
      <Box
        p={0}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content', // content eke max width ekt ynna
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={2}
            alignItems={'left'}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <img
              src={el.preview}
              alt={el.message}
              style={{ maxHeight: 210, borderRadius: '10px' }}
            />
            <Stack spacing={2}>
              <Typography variant="subtitle2">Creating Chat App</Typography>
              <Typography
                variant="subtitle2"
                component={Link}
                to="//https://www.youtube.com"
                sx={{ color: theme.palette.primary.main }}
              >
                www.youtube.com
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              color={el.incoming ? theme.palette.text : '#fff'}
            >
              {el.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {menu && <MessageOptions />}
    </Stack>
  );
};

const ReplyMsg = ({ el, menu }) => {
  const theme = useTheme();

  return (
    <Stack
      direction={'row'}
      justifyContent={el.incoming ? 'start' : 'end'}
      alignItems={'start'}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content', // content eke max width ekt ynna
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction={'column'}
            spacing={3}
            alignItems={'center'}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" color={theme.palette.text}>
              {el.message}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : '#fff'}
          >
            {el.reply}
          </Typography>
        </Stack>
      </Box>
      {menu && <MessageOptions />}
    </Stack>
  );
};

const MediaMsg = ({ el, menu }) => {
  const theme = useTheme();

  return (
    <Stack
      direction={'row'}
      justifyContent={el.incoming ? 'start' : 'end'}
      alignItems={'start'}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content', // content eke max width ekt ynna
        }}
      >
        <Stack spacing={1}>
          <img
            src={el.img}
            alt={el.message}
            style={{ maxHeight: 210, borderRadius: '10px' }}
          />
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : '#fff'}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>

      {menu && <MessageOptions />}
    </Stack>
  );
};

const TextMsg = ({ el, menu }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={'row'}
      justifyContent={el.incoming ? 'start' : 'end'}
      alignItems={'start'}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: 'max-content', // content eke max width ekt ynna
        }}
      >
        <Typography
          variant="body2"
          color={el.incoming ? theme.palette.text : '#fff'}
        >
          {el.message}
        </Typography>
      </Box>

      {/* options button */}
      {menu && <MessageOptions />}
    </Stack>
  );
};

const Timeline = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Divider width="46%" />
      <Typography variant="caption" sx={{ color: theme.palette }}>
        {el.text}
      </Typography>
      <Divider width="46%" />
      <Divider />
    </Stack>
  );
};

const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        id="positioned-button"
        aria-controls={open ? 'positioned-button' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <DotsThreeVertical />
      </IconButton>
      <Menu
        id="positioned-button"
        aria-labelledby="positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((el) => (
            <MenuItem onClick={handleClick}>{el.title}</MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
};

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
