import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { SignIn } from "./features/auth/pages/SignIn";
import ForgotPassword from "./features/auth/pages/ForgotPassword";
import { Authentication } from "./features/auth";
import ResetPassword from "./features/auth/pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Authentication />}>
          <Route index element={<SignIn />} />
          <Route path="email-reset" element={<ForgotPassword />} />
          <Route path="password-reset" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
