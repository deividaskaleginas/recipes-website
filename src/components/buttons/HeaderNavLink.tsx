import { Typography } from "components/typography/Typography";
import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface HeaderNavLinkProps {
  children: ReactNode;
  onClick: () => void;
  isActive: boolean;
  to: string;
}

export const HeaderNavLink: React.FC<HeaderNavLinkProps> = ({
  children,
  onClick,
  isActive,
  to,
}) => {
  return (
    <NavLinkStyled isActive={isActive} onClick={onClick}>
      <NavLink to={to}>
        <Typography
          type="smallerTextBold"
          color={isActive ? "secondary100" : "primary100"}
        >
          {children}
        </Typography>
      </NavLink>
    </NavLinkStyled>
  );
};

const NavLinkStyled = styled.div<{ isActive: boolean }>``;
