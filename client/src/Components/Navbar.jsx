// Navbar.js
import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MaterialUISwitch from "../ThemedComponents/ThemedSwitch"; 
import ThemeContext from "../Context/ThemContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
    // Additional logic to change My Map size when switching themes
    const myMapElement = document.getElementById("myMap");
    if (myMapElement) {
      myMapElement.style.fontSize = theme === 'light' ? '24px' : '24px';
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        marginBottom: "30px",
        backgroundColor: theme === 'light' ? 'teal' : 'black',
      }}
    >
      <Toolbar>
        <Typography
          id="myMap"
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: 'center',
            fontSize: '24px',
            color:theme === 'light' ? 'white' : 'orange' ,
          }}
        >
          My Map
        </Typography>
        <MaterialUISwitch onChange={handleToggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
