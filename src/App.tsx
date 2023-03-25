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
import { Recipe } from "pages/recipe/Recipe";
import { Comments } from "pages/comments/Comments";

const App: React.FC = () => {
  const { isUserLoggedIn } = useContext(UserContext);

  console.log(isUserLoggedIn);

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={!isUserLoggedIn ? <Navigate to="/login" /> : <RootLayout />}
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
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/comments/:id" element={<Comments />} />
      </Routes>
    </>
  );
};

export default App;
