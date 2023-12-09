"use client";
import {
  Apartment,
  Dataset,
  ListAlt,
  MenuBook,
  Person2,
  PersonAdd,
  Poll,
  QuestionAnswer,
  School,
  Subject,
  TravelExplore,
} from "@mui/icons-material";
import { useContext, useState } from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  SubMenu,
  MenuItem,
} from "react-pro-sidebar";
import { ThemeContext } from "../../context/ContextProvider";
import theme from "../ThemeRegistry/theme";
import { Avatar, Box, Divider, List, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
const Sidebar = () => {
  const { collapse, mode } = useContext(ThemeContext);

  const router = useRouter();
  return (
    <ProSidebar
      collapsed={collapse}
      style={{
        backgroundColor: "black",
        overflowY: "auto",
        height: "100vh",
      }}
    >
      <Paper
        sx={{
          height: "100%",
          borderRadius: 0,
          ".ps-menuitem-root a": {
            ":hover": {
              bgcolor: "#0099FF   ",
            },
          },
          ".ps-menu-button": {
            bgcolor: mode === "dark" ? "#000000" : "#9D9A9A",
          },
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"100%"}
          p={"20px 0"}
        >
          {!collapse && (
            <Avatar
              variant="rounded"
              sx={{
                height: 100,
                width: 100,
              }}
            />
          )}
        </Box>
        <Menu>
          <Menu>
            <SubMenu icon={<Poll />} label="Charts">
              <MenuItem
                icon={<PersonAdd />}
                onClick={() => router.push("/admin/gender")}
              >
                {" "}
                Gender
              </MenuItem>
              <MenuItem
                icon={<Apartment />}
                onClick={() => router.push("/admin/colors")}
              >
                {" "}
                Colors
              </MenuItem>
              <MenuItem
                icon={<Subject />}
                onClick={() => router.push("/admin/geo")}
              >
                Geo Grpahic
              </MenuItem>
              <MenuItem
                icon={<Subject />}
                onClick={() => router.push("/admin/fav_number")}
              >
                Fav Number
              </MenuItem>
              <MenuItem
                icon={<Subject />}
                onClick={() => router.push("/admin/forhead")}
              >
                Forhead Height
              </MenuItem>
            </SubMenu>
          </Menu>
          <br />
        </Menu>
      </Paper>
    </ProSidebar>
  );
};

export default Sidebar;
