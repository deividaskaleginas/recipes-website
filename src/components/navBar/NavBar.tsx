import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  home,
  homeActive,
  notification,
  notificationActive,
  profile,
  profileActive,
  saved,
  savedActive,
} from "../../assets/svg";
import { AddButton } from "../buttons/AddButton";

import { FlexWrapper } from "../wrappers/FlexWrapper";

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <FlexWrapper
      position="fixed"
      left="0"
      bottom="0"
      justifyContent={"space-between"}
      height="6.625rem"
      width="100%"
      padding="1.5rem 2.5rem 3.625rem 2.5rem"
      boxShadow="box-shadow: -1px -7px 5px 0px rgba(108,108,108,0.21)"
      webkitBoxShadow="-1px -7px 5px 0px rgba(108,108,108,0.21)"
      mozBoxShadow="-1px -7px 5px 0px rgba(108,108,108,0.21)"
    >
      <FlexWrapper gap="2.5rem">
        <NavLink to={"/"}>
          {({ isActive }) => (isActive ? homeActive : home)}
        </NavLink>
        <NavLink to={"/saved"}>
          {({ isActive }) => (isActive ? savedActive : saved)}
        </NavLink>
      </FlexWrapper>
      <AddButton onClick={() => navigate("/add")} />
      <FlexWrapper gap="2.5rem">
        <NavLink to={"/notifications"}>
          {({ isActive }) => (isActive ? notificationActive : notification)}
        </NavLink>
        <NavLink to={"/profile"}>
          {({ isActive }) => (isActive ? profileActive : profile)}
        </NavLink>
      </FlexWrapper>
    </FlexWrapper>
  );
};
