import React from 'react';
import { Divider } from '@mui/material';
import { IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import { GoogleLogo, TwitterLogo,GithubLogo } from 'phosphor-react';

const AuthSocial = () => {
  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: 'overline',
          color: 'text.disabled',
          '&::before,:: after': {
            borderTopStyle: 'dashed',
          },
        }}
      >
        OR
      </Divider>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <IconButton>
          <GoogleLogo  />
        </IconButton>
        <IconButton>
          <GithubLogo  />
        </IconButton>
        <IconButton >
          <TwitterLogo />
        </IconButton>
      </Stack>
      {/* Auth Social */}
    </div>
  );
};

export default AuthSocial;
