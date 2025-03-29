import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Stack,
} from '@mui/material';
import { MagnifyingGlass, X } from 'phosphor-react';
import React, { forwardRef } from 'react';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from '../../components/Search';
import { CallLogs } from '../../data';
import { CallLogElement } from '../../components/CallElement';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      open={open}
      maxWidth="xs"
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      sx={{ p: 4 }}
    >
      {/* title */}
      <DialogTitle sx={{ mb: 4 }}>Start Call</DialogTitle>
      {/* content */}
      <DialogContent>
        <Stack spacing={3}>
          <Stack sx={{ width: '100%' }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color={'#709ce6'} />
              </SearchIconWrapper>
              <StyledInputBase
                sx={{ width: '100%' }}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Stack>

          <Stack spacing={2}>
            {CallLogs.map((el) => (
              <CallLogElement {...el} />
            ))}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default StartCall;
