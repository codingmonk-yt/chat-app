import { Box, Stack } from "@mui/material";
import React from "react";

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              //timeline
              break;
            case msg:
              switch (el.subtype) {
                case "img":
                  //img
                  break;

                case "doc":
                  //doc msg
                  break;
                case "link":
                  //link msg
                  break;
                case "reply":
                  //reply msg
                  break;
                default:
                  break;
              }
              break;

            default:
              break;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
