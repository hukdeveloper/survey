"use client";

import { Box, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "../../../components/Admin/Sidebar";
import Header from "../../../components/Admin/Header";
import Footer from "../../../components/Admin/Footer";

import ThemeRegistry from "../../../components/ThemeRegistry/ThemeRegistry";

const Wrapper = ({ children }) => {
  return (
    <ThemeRegistry>
      <Box display={"flex"}>
        <Sidebar />
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"column"}
          height={"100vh"}
          sx={{
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Header />
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            height={"100%"}
            p={"10px"}
          >
            {children}
          </Box>
          <Footer />
        </Box>
      </Box>
    </ThemeRegistry>
  );
};

export default Wrapper;
