import React from 'react';
import { Divider, Stack } from '@mui/material';
import { Typography, Box, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Image, DownloadSimple, DotsThreeVertical } from 'phosphor-react';

import { Message_options } from '../../../src/data/index';

const LinkMsg = ({ el,menu}) => {
  const theme = useTheme();
  return (
    <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
        }}
        borderRadius={1.5}
        width={'max-content'}
      >

        <Stack spacing={2} direction={"row"}>
          <Stack
            p={2}
            spacing={3}
            alignItems={'start'}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <img
              src={el.preview}
              alt={el.message}
              style={{ maxHeight: 210, borderRadius: 10 }}
            />
            <Stack spacing={2}>
              <Typography variant="subtitle"> Creating Chat App</Typography>
              <Typography
                variant="subtitle"
                sx={{ color: theme.palette.primary.main }}
                to="//https://www.youtube.com"
                component={Link}
              >
                {' '}
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

const ReplyMsg = ({ el,menu }) => {
  const theme = useTheme();
  return (
    <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
        }}
        borderRadius={1.5}
        width={'max-content'}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction={'column'}
            alignItems={'center'}
            sx={{
              backgroundColor: el.incoming
                ? theme.palette.background.paper
                : theme.palette.primary.main,
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

const Timeline = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack
      alignItems={'center'}
      direction={'row'}
      justifyContent={'space-between'}
    >
      <Divider width="46%" />
      <Typography variant="caption" sx={{ color: theme.palette.text }}>
        {el.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};

const TextMsg = ({ el,menu }) => {
  const theme = useTheme();
  return (
    <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
        }}
        borderRadius={1.5}
        width={'max-content'}
      >
        <Typography
          variant="body2"
          color={el.incoming ? theme.palette.text : '#fff'}
        >
          {el.message}
        </Typography>
      </Box>
      {menu && <MessageOptions />}
    </Stack>
  );
};

const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const anchorRef = React.useRef(null);
  const handleClick = event => {
    setAnchorEl(anchorRef.current);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton 
        ref={anchorRef}
        aria-controls={open ? 'message-options-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         <DotsThreeVertical size={20} />
      </IconButton>

      <Menu
        id="message-options-menu" // give a proper id
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom', // Adjust as needed
          horizontal: 'right', // Adjust as needed
        }}
        transformOrigin={{
          vertical: 'top',    // Adjust as needed
          horizontal: 'right', // Adjust as needed
        }}
        PaperProps={{
          style: {
            minWidth: 150, // Adjust as needed
          },
        }}
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((option) => (
            <MenuItem key={option.title} onClick={handleClose}> {/* Add key prop and handleClose */}
              {option.title}
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </div>
  );
};

const DocMsg = ({ el,menu }) => {
  const theme = useTheme();
  return (
    <Stack
      alignItems={'center'}
      direction={'row'}
      justifyContent={'space-between'}
    >
      <Stack direction={'row'}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.paper
            : theme.palette.primary.main,
        }}
        borderRadius={1.5}
        width={'max-content'}
      > 
        <Stack spacing={2}>
          <Stack
            p={2}
            direction={'row'}
            spacing={3}
            alignItems={'center'}
            sx={{
              backgroundColor: el.incoming
                ? theme.palette.background.paper
                : theme.palette.primary.main,
            }}
          >
            <Image size={48} />
            <Typography variant="caption">Abstract.png</Typography>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography
            variant="body2"
            sc={{ color: el.incoming ? theme.palette.text : '#fff' }}
          >
            {el.message}
          </Typography>
        </Stack>
        {/* <MessageOptions /> */}
      </Box>
      {menu && <MessageOptions />}
      </Stack>
    </Stack>
  );
};

const MediaMsg = ({ el,menu }) => {
  const theme = useTheme();
  return (
    <Stack
      alignItems={'center'}
      direction={'row'}
      justifyContent={'space-between'}
    >
      <Stack direction={'row'}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
        }}
        borderRadius={1.5}
        width={'max-content'}
      >
        <Stack spacing={1}>
          <img
            src={el.img}
            alt={el.message}
            style={{ maxHeight: '210px', borderRadius: '10px' }}
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
      
    </Stack>
  );
};

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
