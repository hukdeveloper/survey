"use client";

import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={50}
      // bgcolor={theme}
    >
      <Typography variant="subtitle2">Desinged & Developed by HUK</Typography>
    </Box>
  );
};

export default Footer;
