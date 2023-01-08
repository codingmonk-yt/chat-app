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

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              // Timeline
              return <Timeline el={el} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  // img msg
                  return <MediaMsg el={el} />;

                case "doc":
                  // Doc msg
                  return <DocMsg el={el} />;

                case "link":
                  // Link msg
                  return <LinkMsg el={el} />;

                case "reply":
                  //reply msg
                  return <ReplyMsg el={el} />;

                default:
                  // text msg
                  return <TextMsg el={el} />;
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
