import React from 'react';
import Chats from './Chats';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import Conversation from '../../components/conversation';
import { useTheme } from '@mui/material/styles';
import Contact from '../../components/Contact';
import { useSelector } from 'react-redux';
import StarredMessages from '../../components/StarredMessages';
import SharedMessages from '../../components/SharedMessages';

const GeneralApp = () => {
  const theme = useTheme();
  const {sidebar}=useSelector ((store) => store.app);

  return (
    <Stack direction={'row'} sx={{ width: '100' }}>
      {/* Chats*/}
      <Chats />

      {/*Conversational*/}
      <Box
        sx={{
          height: '100%',
          width: sidebar.open? 'calc(100vw - 740px)': 'calc(100vw - 420px)',
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
      {sidebar.open && (()=> {
        switch (sidebar.type) {
          case 'CONTACT':
            return <Contact />;
          
          case 'SHARED':
            return <SharedMessages />;
            
          case 'STARRED':
              return <StarredMessages />;
          
          default:
            return <div></div>;
        } 
      })()}
    </Stack>
  );
};

export default GeneralApp;
