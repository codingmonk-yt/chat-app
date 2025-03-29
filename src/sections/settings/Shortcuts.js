import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Stack,
  Typography,
} from '@mui/material';
import React, { forwardRef } from 'react';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Shortcuts = ({ open, handleClose }) => {
  const list = [
    {
      key: 0,
      title: 'Mark as read',
      combination: ['Cmd', 'Shift', 'U'],
    },
    {
      key: 1,
      title: 'Mark as read',
      combination: ['Cmd', 'Shift', 'U'],
    },
    {
      key: 2,
      title: 'Mark as read',
      combination: ['Cmd', 'Shift', 'U'],
    },
    {
      key: 3,
      title: 'Mark as read',
      combination: ['Cmd', 'Shift', 'U'],
    },
    {
      key: 4,
      title: 'Mark as read',
      combination: ['Cmd', 'Shift', 'U'],
    },
    {
      key: 5,
      title: 'Mark as read',
      combination: ['Cmd', 'Shift', 'U'],
    },
  ];
  return (
    <Dialog
      fullWidth
      maxWidth={'md'}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      sx={{ p: 4 }}
    >
      <DialogTitle>Keyboard Shortcuts</DialogTitle>
      <DialogContent sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {list.map(({ key, title, combination }) => (
            <Grid item xs={6}>
              <Stack
                sx={{ width: '100%' }}
                justifyContent={'space-between'}
                spacing={3}
                direction={'row'}
                alignItems={'center'}
              >
                <Typography variant="caption" sx={{ fontSize: 14 }}>
                  {title}
                </Typography>

                <Stack spacing={2} direction={'row'}>
                  {combination.map((el) => {
                    return (
                      <Button variant="outlined" sx={{ color: '#212121' }}>
                        {el}
                      </Button>
                    );
                  })}
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          {' '}
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Shortcuts;
