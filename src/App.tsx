import React, { useContext } from "react";

import GlobalStyles from "./styles/global";
import { GettingStarting, Notifications, Profile, Saved } from "./pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { RootLayout } from "./components/layouts/RootLayout";
import { AddRecipe } from "./pages/addRecipie/AddRecipe";
import UserContext from "contexts/userContext/userContext";

const App: React.FC = () => {
  const { userLoggedIn } = useContext(UserContext);
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={!userLoggedIn ? <Navigate to="/login" /> : <RootLayout />}
        >
          <Route index element={<Home />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/gettingstarting" element={<GettingStarting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<AddRecipe />} />
      </Routes>
      {/* <NavBar /> */}
    </>
  );
};

export default App;
