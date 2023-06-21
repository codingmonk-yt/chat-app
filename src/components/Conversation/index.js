import React from "react";
import { Box, Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat header */}
      <Header />
      {/* message */}
      <Box width={"100%"} sx={{ flexGrow: 1 }}></Box>
      {/* Chat footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
