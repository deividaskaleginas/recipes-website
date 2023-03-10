import React from "react";

import GlobalStyles from "./styles/global";
import { NavBar } from "./components/navBar/NavBar";
import { GettingStarting, Notifications, Profile, Saved } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { RootLayout } from "./components/layouts/RootLayout";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/gettingstarting" element={<GettingStarting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <NavBar /> */}
    </>
  );
};

export default App;
