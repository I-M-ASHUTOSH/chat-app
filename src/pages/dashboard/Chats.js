import React from 'react';
import {
  alpha,
  Box,
  IconButton,
  Button,
  Stack,
  Typography,
  InputBase,
  Divider,
  Avatar,
  Badge,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { CircleDashed, MagnifyingGlass, ArchiveBox } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import { ChatList } from '../../data';
import { SimpleBarStyle } from '../../components/Scrollbar';
import { useTheme } from '@emotion/react';

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

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor:
          theme.palette.mode === 'light'
            ? '#fff'
            : theme.palette.background.default,
        borderRadius: 1,
      }}
      p={2}
    >
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent="space-between"
      >
        <Stack direction={'row'} spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar src={img} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2"> {name}</Typography>
            <Typography variant="caption"> {msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={'center'}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));

export default function Chats() {
  const theme = useTheme();

//   useEffect(() => {
//     const simpleBar = document.querySelector('.simplebar-content-wrapper');
//     if (simpleBar) {
//       const hideScrollbar = () => {
//         simpleBar.style.overflow = 'hidden';
//       };

//       const showScrollbar = () => {
//         simpleBar.style.overflow = 'auto';
//         setTimeout(hideScrollbar, 500); // Timeout in milliseconds
//       };

//       simpleBar.addEventListener('mouseenter', showScrollbar);
//       simpleBar.addEventListener('mouseleave', hideScrollbar);

//       return () => {
//         simpleBar.removeEventListener('mouseenter', showScrollbar);
//         simpleBar.removeEventListener('mouseleave', hideScrollbar);
//       };
//     }
//   }, []);

  return (
    <div>
      <Box
        sx={{
          position: 'relative',
          width: 320,
          backgroundColor:
            theme.palette.mode === 'light'
              ? '#F8FAFF'
              : theme.palette.background.paper,
          boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
        }}
      >
        <Stack p={3} spacing={2} sx={{ height: '100vh' }}>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Typography variant="h5">Chats</Typography>
            <IconButton>
              <CircleDashed />
            </IconButton>
          </Stack>
          <Stack>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search.."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Stack>
          <Stack spacing={1}>
            <Stack direction="row" alignItems={'center'} spacing={2}>
              <ArchiveBox size={24} />
              <Button>Archive</Button>
            </Stack>
            <Divider />
          </Stack>
          <Stack
            direction={'column'}
            spacing={2}
            sx={{ flexGrow: 1, overflow: 'scroll', height: '100%' }}
          >
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: '#676767' }}>
                  Pinned
                </Typography>
                {ChatList.filter(el => el.pinned).map(el => (
                  <ChatElement key={el.id} {...el} />
                ))}
              </Stack>
              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: '#676767' }}>
                  All Chats
                </Typography>
                {ChatList.filter(el => !el.pinned).map(el => (
                  <ChatElement key={el.id} {...el} />
                ))}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}