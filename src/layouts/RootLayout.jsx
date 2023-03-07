import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navBar/NavBar";

export const RootLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <NavBar />
    </>
  );
};
