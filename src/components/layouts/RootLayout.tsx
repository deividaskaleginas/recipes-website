import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../navBar/NavBar";

export const RootLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
};
