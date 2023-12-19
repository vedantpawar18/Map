import React, { useContext, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Checkbox,
  Button,
  Link,
  Grid,
  Box,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/system";
import { Icon } from "@iconify/react";
import IconButton from "@mui/material/IconButton";
import MuiAlert from "@mui/material/Alert";
import Navbar from "../Components/Navbar";
import ThemeContext from "../Context/ThemContext";

const MyContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: (theme) => theme.spacing(8),
});

const MyForm = styled("form")({
  width: "100%",
  marginTop: (theme) => theme.spacing(1),
});

const MyButton = styled(Button)({
  margin: (theme) => theme.spacing(3, 0, 2),
});

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const { theme } = useContext(ThemeContext);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        handleSnackbar("Login successful");
      } else {
        const errorData = await response.json(); 
        handleSnackbar(`Login failed: ${errorData.message}`);
      }
    } catch (error) { 
      handleSnackbar("Error during login");
    }
  };

  const backgroundColor = theme === "dark" ? "#152433" : "white";
  const textColor = theme === "dark" ? "white" : "black"; // Set text color based on the theme

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: backgroundColor,
      }}
    >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          flex: 1,
        }}
      >
        <Box
          className="image-container"
          sx={{
            flex: 1,
            overflow: "hidden",
            height: "40%",
            paddingLeft: 2,
            paddingRight: 2,
            paddingTop: "20px",
          }}
        >
          {/* Replace this with your actual image component */}
          <img
            src="https://www.freepnglogos.com/uploads/world-map-png/globe-world-world-map-graphic-design-png-image-with-20.png"
            alt="placeholder image"
            style={{ width: "100%", height: "80%", objectFit: "cover" }}
          />
        </Box>
        <Box
          className="login-container"
          sx={{
            flex: 1,
            paddingLeft: 2,
            paddingRight: 2,
            height: "80%",
            paddingTop: "20px",
          }}
        >
          <MyContainer component="main" maxWidth="xs">
            <Typography component="h1" variant="h6" sx={{ color: textColor }}>
              Welcome Back!
            </Typography>
            <MyForm onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="username"
                label="Username or Email"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                sx={{
                  backgroundColor: textColor === "white" ? "white" : "white",
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                sx={{
                  backgroundColor: textColor === "white" ? "white" : "white",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: 1,
                  alignItems: "center",
                }}
              >
                <Checkbox id="remember-me" color="primary" />
                <label htmlFor="remember-me" style={{ color: textColor }}>
                  Remember Me
                </label>
              </Box>
              <MyButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ backgroundColor: "teal", color: "white" }}
              >
                Sign In
              </MyButton>

              <Grid container justifyContent="flex-end">
                <Grid item sx={{ color: "grey" }}>
                  {/* Added color: grey */}
                  Don't have an account?
                  <Link
                    href="/signup"
                    variant="body2"
                    sx={{ color: textColor }}
                  >
                    Sign Up
                  </Link>
                </Grid>
              </Grid>
            </MyForm>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "50%",
                margin: "20px 0",
              }}
            >
              <Box
                sx={{
                  width: "20%",
                  height: "2px",
                  backgroundColor:
                    textColor === "white" ? "#ccc" : "#666",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  padding: "0 10px",
                  color: textColor === "white" ? "#ccc" : "#666",
                }}
              >
                OR
              </Typography>
              <Box
                sx={{
                  width: "20%",
                  height: "2px",
                  backgroundColor:
                    textColor === "white" ? "#ccc" : "#666",
                }}
              />
            </Box>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Link href="#">
                  <IconButton>
                    <Icon sx={{ fontSize: 30 }}>
                      {/* Use appropriate icon component and import necessary libraries */}
                      <Icon icon="devicon:facebook" />
                    </Icon>
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#">
                  <IconButton>
                    <Icon sx={{ fontSize: 30 }}>
                      {/* Use appropriate icon component and import necessary libraries */}
                      <Icon icon="flat-color-icons:google" />
                    </Icon>
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#">
                  <IconButton>
                    <Icon sx={{ fontSize: 30 }}>
                      {/* Use appropriate icon component and import necessary libraries */}
                      <Icon icon="skill-icons:twitter" />
                    </Icon>
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#">
                  <IconButton>
                    <Icon sx={{ fontSize: 30 }}>
                      {/* Use appropriate icon component and import necessary libraries */}
                      <Icon icon="skill-icons:linkedin" />
                    </Icon>
                  </IconButton>
                </Link>
              </Grid>
            </Grid>
          </MyContainer>
        </Box>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="success"
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default Login;
