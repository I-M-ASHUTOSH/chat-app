import React from 'react';
import { Stack, Box } from '@mui/material';

import { Avatar, Badge } from '@mui/material';
import { faker } from '@faker-js/faker';
import { styled, useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { IconButton, Divider } from '@mui/material';
import { MagnifyingGlass, VideoCamera, Phone, CaretDown } from 'phosphor-react';
import { ToggleSidebar } from '../../redux/slices/app';
import { useDispatch } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export default function Header() {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box
      p={2}
      sx={{
        // height: 100,
        width: '100%',
        backgroundColor:
          theme.palette.mode === 'light'
            ? '#fff'
            : theme.palette.background.paper,
        boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
      }}
    >
      <Stack
        alignItems={'center'}
        direction={'row'}
        justifyContent={'space-between'}
        sx={{ width: '100%', height: '100%' }}
      >
        <Stack
          onClick={() => {
            //
            console.log('clicked');
            dispatch(ToggleSidebar());
          }}
          direction={'row'}
          spacing={2}
        >
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar
                alt={faker.name.fullName()}
                src={faker.image.avatar()}
              ></Avatar>
            </StyledBadge>
          </Box>
          <Stack spacing={0.2}>
            <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>
        <Stack>
          {/* to bring all icons together (conversation right side icons)*/}
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <IconButton>
              <VideoCamera />
            </IconButton>
            <IconButton>
              <Phone />
            </IconButton>
            <IconButton>
              <MagnifyingGlass />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <CaretDown />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
