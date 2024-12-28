import React from 'react';
import { Stack, Box, IconButton, Avatar ,Switch} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Logo from '../../assets/Images/logo.ico';
import { Nav_Buttons } from '../../data';
import Divider from '@mui/material/Divider';
import { Gear } from 'phosphor-react';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import useSettings from '../../hooks/useSettings';

export default function SideBar() {
    const theme=useTheme();
    const [selected, setSelected] = useState(0);
    const {onToggleMode} = useSettings();
  
  return (
    <Box
    sx={{
      backgroundColor: theme.palette.background.paper,
      boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
      height: '100vh',
      width: 100,
    }}
  >
    <Stack // Use Stack for vertical layout
      justifyContent="space-between"
      sx={{
        alignItems: 'center', // Center horizontally
        backgroundColor: theme.palette.background.paper,
        height: '100%',
        width: 100, // Fixed width for the sidebar
        padding: theme.spacing(2), // Add some padding
      }}
      spacing={3} // Add spacing between items
    >
      <Stack alignItems={'center'} spacing={4}>
        <Box // Logo container
          sx={{
            backgroundColor: theme.palette.primary.main,
            height: 64,
            width: 64,
            borderRadius: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: theme.spacing(2), // Add spacing below the logo
          }}
        >
          <img src={Logo} alt={'chat app logo'} />
        </Box>
        <Stack
          sx={{
            width: 'max-content', // Ensure the Stack takes the full width
          }}
          direction="column"
          spacing={3}
        >
          {Nav_Buttons.map(el =>
            el.index === selected ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton
                  sx={{ width: 'max-content', color: '#fff' }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => setSelected(el.index)}
                sx={{ width: 'max-content', color: theme.palette.mode==="light" ? "#000" : theme.palette.text.primary }}
                key={el.index}
              >
                {el.icon}
              </IconButton>
            ),
          )}
          <Divider />
          {selected === 4 ? (
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: 1.5,
              }}
            >
              <IconButton sx={{ width: 'max-content', color: '#fff' }}>
                <Gear size={32} />
              </IconButton>
            </Box>
          ) : (
            <IconButton
              onClick={() => {
                setSelected(4);
              }}
              sx={{ width: 'max-content', color: theme.palette.mode==="light" ? "#000" : theme.palette.text.primary }}
            >
              <Gear size={32} />
            </IconButton>
          )}
        </Stack>
      </Stack>
      <Stack spacing={3}>
      <Switch onChange={()=> {
        onToggleMode();
      }} defaultChecked />
        <Avatar src={faker.image.avatar()}></Avatar>
      </Stack>

    </Stack>
  </Box> 

  );
}
