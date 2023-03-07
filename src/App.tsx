import React from "react";

import GlobalStyles from "./styles/global";
import { NavBar } from "./components/navBar/NavBar";
import { GettingStarting, Notifications, Profile, Saved } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gettingstarting" element={<GettingStarting />} />
      </Routes>
      {/* <NavBar /> */}
    </>
  );
};

export default App;
