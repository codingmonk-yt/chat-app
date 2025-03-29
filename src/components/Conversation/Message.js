import { Box, Stack } from '@mui/material';
import React from 'react';
import { Chat_History } from '../../data/index';
import {
  Timeline,
  TextMsg,
  MediaMsg,
  ReplyMsg,
  LinkMsg,
  DocMsg,
} from './MsgType';

const Message = ({ menu }) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case 'divider':
              return <Timeline el={el} />;
            case 'msg':
              switch (el.subtype) {
                case 'img':
                  return <MediaMsg el={el} menu={menu} />;
                case 'doc':
                  return <DocMsg el={el} menu={menu} />;
                case 'link':
                  return <LinkMsg el={el} menu={menu} />;
                case 'reply':
                  return <ReplyMsg el={el} menu={menu} />;
                default:
                  return <TextMsg el={el} menu={menu} />;
              }

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
