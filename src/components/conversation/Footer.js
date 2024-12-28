import React, { useState } from 'react';
import { Stack, Box, InputAdornment ,Fab} from '@mui/material';
import { IconButton,TextField ,Tooltip} from '@mui/material';
import {
  LinkSimple,
  Smiley,
  PaperPlaneTilt,
  Image,
  Camera,
  Sticker,
  User,
  File
} from 'phosphor-react';
import { useTheme,styled} from '@mui/material/styles';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

const StyledInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
      paddingTop: '12px ',
      paddingBottom: '12px ',
      // backgroundColor:theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.default,
      // width:"100%"
    },
  }));

const Actions = [
  {
    color:"#4da5fe",
    icon: <Image size={24}/>,
    y: 102,
    title: "Photo/Video"
  },
  {
    color:"#1b8cfe",
    icon: <Sticker size={24}/>,
    y: 172,
    title: "Stickers"
  },
  {
    color:"#0172e4",
    icon: <Camera size={24}/>,
    y: 242,
    title: "Image"
  },
  {
    color:"#0159b2",
    icon: <File size={24}/>,
    y: 312,
    title: "Document"
  },
  {
    color:"#013f7f",
    icon: <User size={24}/>,
    y: 382,
    title: "Contact"
  },
]
const ChatInput = ({setOpenPicker}) =>{
  const [openAction,setOpenAction] = React.useState(false);
  return (
    <StyledInput
            fullWidth
            placeholder="write a message"
            variant="filled"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <Stack sx={{width:"max-content"}}>
                  <Stack sx={{position:"relative", display:openAction?"inline":"none"}}>
                  {Actions.map((el)=>(
                    <Tooltip placement='right' title={el.title}>
                      <Fab sx={{position:"absolute", top: -el.y, backgroundColor:el.color}}>
                      {el.icon}  
                      </Fab>
                    </Tooltip>
                    
                  ))}
                  </Stack>

                <InputAdornment>
                  <IconButton onClick={()=>{
                    setOpenAction((prev)=>!prev);
                  }}>
                    <LinkSimple />
                  </IconButton>
                </InputAdornment>
                </Stack>
              ),
              endAdornment:(
                <InputAdornment>
                  <IconButton onClick={()=>{
                    setOpenPicker((prev)=>!prev);
                  }}>
                    <Smiley />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
  )
  
}
export default function Footer() {
    const theme=useTheme();
    const [openPicker,setOpenPicker] = useState(false);
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
          <Stack sx={{width:"100%"}}>
            <Box sx={{display: openPicker?"inline":"none", zIndex:10 , position:"fixed" , bottom:81, right:100}}>
            <Picker data={data} onEmojiSelect={console.log} theme={theme.palette.mode}/>
            </Box>
            <ChatInput setOpenPicker={setOpenPicker} />
            
          </Stack>
          <Box sx={{height: 48,width: 48, backgroundColor:theme.palette.primary.main, borderRadius:1.5}}>
            <Stack sx={{height:"100%",width:"100%"}} alignItems={'center'} justifyContent={'center'}><IconButton><PaperPlaneTilt color='white'/></IconButton></Stack>
            
          </Box>
        </Stack>
      </Box>
  );
}
