import React, { useState } from 'react';
import {
  Box,
  Stack,
  IconButton,
  Divider,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Nav_Buttons, Profile_Menu } from '../../data';
import useSettings from '../../hooks/useSettings';
import AntSwitch from '../../components/AntSwitch';
import { faker } from '@faker-js/faker';
import talkLogo from '../../assets/Images/Talk-logo-transparent.png';

import { Gear } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { LogoutUser } from '../../redux/slices/auth';
import { useDispatch } from 'react-redux';

const getRoutePath = (index) => {
  switch (index) {
    case 0:
      return '/app';
    case 1:
      return '/group';
    case 2:
      return '/call';
    case 3:
      return '/settings';
    default:
      return '/app';
  }
};

const getMenuPath = (index) => {
  switch (index) {
    case 0:
      return '/profile';
    case 1:
      return '/settings';
    case 2:
      //TODO : update token, set isAuthenticated to false
      return '/auth/login';
    default:
      return '/profile';
  }
};

export const Sidebar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
        height: '100vh',
        width: 100,
      }}
    >
      <Stack
        direction="column"
        sx={{ height: '100%' }}
        justifyContent={'space-between'}
        alignItems={'center'}
        spacing={3}
      >
        <Stack alignItems={'center'} spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.light,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img src={talkLogo} alt="logo" />
          </Box>
          <Stack
            spacing={3}
            sx={{ width: 'max-content' }}
            direction={'column'}
            alignItems={'center'}
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{ width: 'max-content', color: '#fff' }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(el.index);
                    navigate(getRoutePath(el.index));
                  }}
                  sx={{
                    width: 'max-content',
                    color:
                      theme.palette.mode === 'light'
                        ? '#000'
                        : theme.palette.text.primary,
                  }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
              )
            )}

            <Divider sx={{ width: '48px' }} />

            {selected === 3 ? (
              <Box
                p={1}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ width: 'max-content', color: '#fff' }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  setSelected(3);
                  navigate(getRoutePath(3));
                }}
                sx={{
                  width: 'max-content',
                  color:
                    theme.palette.mode === 'light'
                      ? '#000'
                      : theme.palette.text.primary,
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <AntSwitch
            onChange={() => {
              onToggleMode();
            }}
            defaultChecked
          />
          <Avatar
            id="positioned-button"
            aria-controls={open ? 'positioned-button' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            src={faker.image.avatar()}
          />
          <Menu
            id="positioned-button"
            aria-labelledby="positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((el, idx) => (
                <MenuItem
                  onClick={() => {
                    handleClick();
                  }}
                >
                  <Stack
                    sx={{ width: 100 }}
                    direction="row"
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    onClick={() => {
                      if (idx === 2) {
                        dispatch(LogoutUser());
                      } else {
                        navigate(getMenuPath(idx));
                      }
                    }}
                  >
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};
