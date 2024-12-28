import { Stack, Box } from '@mui/material';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Message from './Message';

const Conversation = () => {
  return (
    <Stack height={'100%'} maxHeight={'100vh'} width={'auto'}>
      {/* Header */}
      <Header/>
      {/* Conversation */}
      <Box width={'100%'} sx={{ height: 'calc(100% - 150px)', overflowY: 'auto' }}>
      <Message/>
      </Box>
      {/* Footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
