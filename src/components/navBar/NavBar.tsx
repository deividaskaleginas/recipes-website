import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "styles/theme";

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
    <NavBarStyled>
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
    </NavBarStyled>
  );
};

const NavBarStyled = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  justify-content: space-between;
  height: 6.625rem;
  width: 100%;
  padding: 1.5rem 2.5rem 3.625rem 2.5rem;
  background-color: ${theme.colors.white};
  box-shadow: -1px -7px 5px 0px rgba(108, 108, 108, 0.21);
  -webkit-box-shadow: -1px -7px 5px 0px rgba(108, 108, 108, 0.21);
  -moz-box-shadow: -1px -7px 5px 0px rgba(108, 108, 108, 0.21);

  @media ${theme.device.tablet} {
    display: none;
  }
`;
