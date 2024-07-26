import React from "react";
import {Box, Stack} from "@mui/material";
import Chats from "./Chats";
import Conversation from"../../components/Conversation";
import { useTheme } from "@mui/material/styles";


const GeneralApp = () => {
  const theme= useTheme();
  return (
    <Stack direction="row" sx={{width:"100%"}}>
     {/* Chats */}
     <Chats />
     
     <Box 
     sx=
     {{
      height:"100%", 
      width: "calc(100vw-420px)",
      backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
      }}
    >
      {/* Conversation */}
      <Conversation />

     </Box>
    </Stack>
  );
};

export default GeneralApp;
