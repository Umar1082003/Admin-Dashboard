import * as React from "react";
import {
  createTheme,
  ThemeProvider,
  styled,
  useTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
// components
// @ts-ignore
import Header from "./Components/header";
// @ts-ignore
import SideBar from "./Components/SideBar";
import { useState } from "react";
import { getDesignTokens } from "./Theme.jsx";
import { Outlet } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  const theme = useTheme();
  const [mode, setMode] = useState(localStorage.getItem("theme") || "light");
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const mytheme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return (
    <ThemeProvider theme={mytheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header
          mode={mode}
          setMode={setMode}
          open={open}
          handleDrawerOpen={handleDrawerOpen}
        />
        <SideBar
          theme={theme}
          open={open}
          handleDrawerClose={handleDrawerClose}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
