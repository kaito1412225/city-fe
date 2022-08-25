import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SignIn } from "./features/auth/pages/SignIn";
import { StyledEngineProvider } from "@mui/material";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <SignIn />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
