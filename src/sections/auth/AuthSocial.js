import { Divider, IconButton, Stack } from '@mui/material';
import { GithubLogo, GoogleLogo, TwitterLogo } from 'phosphor-react';
import React from 'react';

const AuthSocial = () => {
  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: 'overline',
          color: '#606060',
          '&::before, ::after': {
            borderTopStyle: 'dashed',
          },
        }}
      >
        Or
      </Divider>

      <Stack direction={'row'} justifyContent={'center'} spacing={2}>
        <IconButton>
          <GoogleLogo color="#DF3E30" />
        </IconButton>
        <IconButton>
          <GithubLogo color="#545454" />
        </IconButton>
        <IconButton>
          <TwitterLogo color="#1C9CEA" />
        </IconButton>
      </Stack>
    </div>
  );
};

export default AuthSocial;

// social logins in login form
