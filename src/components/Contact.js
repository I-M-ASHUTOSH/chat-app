import { useTheme } from '@mui/material/styles';
import {
  Box,
  Stack,
  IconButton,
  Typography,
  Avatar,
  Divider,
  Button,
} from '@mui/material';
import React from 'react';

import { X, Phone, VideoCamera, CaretRight, Star, Bell, Prohibit,Trash } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { ToggleSidebar } from '../redux/slices/app';
import { faker } from '@faker-js/faker';
import AntSwitch from './AntSwitch';

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: 320, height: '100vh' }}>
      <Stack sx={{ height: '100%' }}>
        {/* this is the header */}
        <Box
          sx={{
            boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
            width: '100%',
            backgroundColor:
            theme.palette.mode === 'light'
            ? '#fff'
            : theme.palette.background.paper,
          }}
        >
          <Stack
            sx={{ height: '100%', p: 2 }}
            direction="row"
            justifyContent="space-between"
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                console.log('clickeddd');
                dispatch(ToggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>
        {/* this is the body */}
        <Stack
          sx={{
            height: '100%',
            position: 'relative',
            flexGrow: 1,
            overflowY: 'scroll',
            backgroundColor:
            theme.palette.mode === 'light'
            ? '#fff'
            : theme.palette.background.paper,
          }}
          p={3}
          spacing={3}
        >
          <Stack alignItems={'center'} direction={'row'} spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName}
              sx={{ height: 64, width: 64 }}
            />
            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="article" fontWeight={500}>
                {'8877888599'}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-evenly'}
          >
            <Stack spacing={1} alignItems={'center'}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems={'center'}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2">
              Imagination is the only limit
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Typography variant="subtitle2">Media,Links & Docs</Typography>
            <Button endIcon={<CaretRight />}>401 </Button>
          </Stack>
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            {[1, 2, 3].map(el => (
              <Box>
                <img src={faker.image.food()} alt={faker.name.fullName()} />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>
            <IconButton>
              <CaretRight></CaretRight>
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Typography>1 group in common</Typography>
          <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">COding monk</Typography>
              <Typography variant="caption">Owl,Parrot,Rabbit</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Button startIcon={<Prohibit/>} fullWidth variant='outlined'>Block</Button>
          <Button startIcon={<Trash />}fullWidth variant='outlined'>Delete</Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
