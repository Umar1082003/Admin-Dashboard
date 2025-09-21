import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MuiAppBar from "@mui/material/AppBar";
import InputBase from "@mui/material/InputBase";
import { Box, styled } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
// icons
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      // @ts-ignore
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

// search
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = ({ handleDrawerOpen, open, setMode, mode }) => {
  const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              marginRight: 5,
            },
            open && { display: "none" },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{
              "aria-label": "search",
              autoComplete: "new-password",
            }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                setMode(mode === "dark" ? "light" : "dark");
                localStorage.setItem("theme", "dark");
              }}
              color="inherit"
            >
              <LightModeOutlinedIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setMode(mode === "dark" ? "light" : "dark");
                localStorage.setItem("theme", "light");
              }}
              color="inherit"
            >
              <DarkModeOutlinedIcon />
            </IconButton>
          )}

          <IconButton color="inherit">
            <NotificationsNoneOutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <PersonOutlineOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
