import React from 'react';
import Chats from './Chats';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import Conversation from '../../components/conversation';
import { useTheme } from '@mui/material/styles';

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction={'row'} sx={{ width: '100' }}>
      {/* Chats*/}
      <Chats />

      {/*Conversational*/}
      <Box
        sx={{
          height: '100%',
          width: 'calc(100vw - 420px)',
          backgroundColor:
            theme.palette.mode === 'light'
              ? '#F0F4FA'
              : theme.palette.background.default,
          // backgroundColor: theme.palette.background.default,
          // backgroundColor: theme.pallete.mode === "light" ? "#F8FAFF" : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
