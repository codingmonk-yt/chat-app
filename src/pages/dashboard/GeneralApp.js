import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";

const GeneralApp = () => {
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      {/* Chats */}
      <Chats />

      {/* conversation */}
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)",
          backgroundColor: "white",
        }}
      >
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
