import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SignIn } from "./features/auth/pages/SignIn";

function App() {
  return (
    <div className="App">
      <SignIn />
    </div>
  );
}

export default App;
