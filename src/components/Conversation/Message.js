import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
  LinkMsg,
  DocMsg,
} from "./MsgTypes";

const Message = ({menu}) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              // Timeline
              return <Timeline el={el}  />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  // img msg
                  return <MediaMsg el={el} menu={menu} />;

                case "doc":
                  // Doc msg
                  return <DocMsg el={el} menu={menu} />;

                case "link":
                  // Link msg
                  return <LinkMsg el={el} menu={menu} />;

                case "reply":
                  //reply msg
                  return <ReplyMsg el={el} menu={menu} />;

                default:
                  // text msg
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
