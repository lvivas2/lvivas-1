import React from "react";
import Nav from "./components/Nav";
import { ThemeProvider } from "@mui/material";
import theme from "./themeConfig";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
    
    </ThemeProvider>
  );
}

export default App;
