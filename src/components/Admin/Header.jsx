"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { ThemeContext } from "../../context/ContextProvider";
import { Box, Switch } from "@mui/material";
import theme from "../ThemeRegistry/theme";

export default function Header() {
  const { handleCollapse, handleMode } = useContext(ThemeContext);
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <IconButton
          size="small"
          onClick={handleCollapse}
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>

        <Switch color="primary" onChange={handleMode} />
      </Toolbar>
    </AppBar>
  );
}
