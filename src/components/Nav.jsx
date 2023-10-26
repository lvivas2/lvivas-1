import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import BrushIcon from "@mui/icons-material/Brush";
import CoffeeIcon from "@mui/icons-material/Coffee";
import DiamondIcon from "@mui/icons-material/Diamond";
import Grid from "@mui/material/Grid";

const Nav = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={3} sx={{background: 'blue'}} >
          <Grid item xs>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              href="https://www.google.com/"
            >
              <img
                src="/img/Logo.svg"
                alt="Logo de la aplicación"
                style={{ height: 20 }}
              />
            </IconButton>
          </Grid>
          <Grid item xs={6} sx={{background: "red", justifyContent:"space-around"  }}>
            <Button
              sx={{ borderRadius: "100px", bgcolor: `primary.dark`, mr: 2}}
              variant="contained"
            >
              <AccountCircleIcon
                sx={{
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  p: 1,
                  mr: 1,
                  fontSize: "large",
                }}
              />
              Home
            </Button>
            <Button
              sx={{ borderRadius: "100px", bgcolor: `primary.dark`, mr: 2}}
              variant="contained"
            >
              <Brightness5Icon
                sx={{
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  p: 1,
                  mr: 1,
                  fontSize: "large",
                }}
              />
              About
            </Button>
            <Button
              sx={{ borderRadius: "100px", bgcolor: `primary.dark`, mr: 2}}
              variant="contained"
            >
              <BrushIcon
                sx={{
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  p: 1,
                  mr: 1,
                  fontSize: "large",
                }}
              />
              Diary
            </Button>
            <Button
              sx={{ borderRadius: "100px", bgcolor: `primary.dark`, mr: 2}}
              variant="contained"
            >
              <CoffeeIcon
                sx={{
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  p: 1,
                  mr: 1,
                  fontSize: "large",
                }}
              />
              Contact
            </Button>
          </Grid>
          <Grid item xs>
            <Button
              sx={{ borderRadius: "100px", bgcolor: `primary.dark` }}
              variant="contained"
            >
              <DiamondIcon
                sx={{
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  p: 1,
                  mr: 1,
                  fontSize: "large",
                }}
              />
              Start
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
