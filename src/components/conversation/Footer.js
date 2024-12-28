import React from 'react';
import { Stack, Box, InputAdornment } from '@mui/material';
import { IconButton,TextField } from '@mui/material';
import {
  LinkSimple,
  Smiley,
  PaperPlaneTilt,
} from 'phosphor-react';
import { useTheme,styled} from '@mui/material/styles';

const StyledInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
      paddingTop: '12px ',
      paddingBottom: '12px ',
      // backgroundColor:theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.default,
      // width:"100%"
    },
  }));

export default function Footer() {
    const theme=useTheme();
  return (
    <Box
        p={2} //padding
        direction={'row'}
        sx={{
          // height: 100,
          width: '100%',
          boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
          backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.paper,
        }}
      >
        <Stack direction={'row'} alignItems={'center'} spacing={3}>
          <StyledInput
            fullWidth
            placeholder="write a message"
            variant="filled"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <LinkSimple />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment:(
                <InputAdornment>
                  <IconButton>
                    <Smiley />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Box sx={{height: 48,width: 48, backgroundColor:theme.palette.primary.main, borderRadius:1.5}}>
            <Stack sx={{height:"100%",width:"100%"}} alignItems={'center'} justifyContent={'center'}><IconButton><PaperPlaneTilt color='white'/></IconButton></Stack>
            
          </Box>
        </Stack>
      </Box>
  );
}
