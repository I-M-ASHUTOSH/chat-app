import React from 'react';
import { Box } from '@mui/material';
import { Chat_History } from '../../data';
import { Stack } from '@mui/material';
import { LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline, DocMsg

 } from './MsgTypes';
const Message = ({menu}) => {
  return (
    <div>
      <Box p={3}>
    <Stack spacing={3}>
        {Chat_History.map((el) => {
            switch (el.type) {
                case "divider":
                    return <Timeline el={el} />

                case "msg":
                    switch (el.subtype) {
                        case "img":
                            return <MediaMsg el={el} menu={menu}/>
                            //img msg
                        case "doc":
                            return <DocMsg el={el} menu={menu}/>
                            //img msg
                        case "link":
                            return <LinkMsg el={el} menu={menu}/>
                            //img msg
                        case "reply":
                            //img msg
                            return <ReplyMsg el={el} menu={menu}/>
                        default:
                        return <TextMsg el={el} menu = {menu}/>
                    }

                case 'receiver':
                    break;
                    
                    
                default:
                    return null
            }
        })}
    </Stack>
      </Box>
    </div>
  );
}

export default Message;
