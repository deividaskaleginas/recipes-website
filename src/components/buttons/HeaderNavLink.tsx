import React, { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "styles/theme";

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
  // const [active, setActive] = useState(false);

  // isActive === children ? setActive(true) : setActive(false);
  console.log(isActive);
  return (
    <NavLinkStyled isActive={isActive} onClick={onClick}>
      <NavLink to={to}>{children}</NavLink>
    </NavLinkStyled>
  );
};

const NavLinkStyled = styled.div<{ isActive: boolean }>`
  > a {
    color: ${({ isActive }) =>
      isActive ? theme.colors.secondary100 : theme.colors.primary100};
  }
`;
