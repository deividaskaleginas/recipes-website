import React from "react";
import { ReactNode } from "react";

import styled from "styled-components";

import { theme } from "../../styles/theme";
import { Typography } from "../typography/Typography";

interface ButtonProps {
  children: ReactNode | ReactNode[];
}

export const Button: React.FC<ButtonProps> = ({ children }) => (
  <ButtonStyled>
    <Typography type="smallerTextBold" color="white">
      {children}
    </Typography>
  </ButtonStyled>
);

const ButtonStyled = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.3125rem;
  min-width: 10.875rem;
  border: none;
  border-radius: 0.625rem;
  background-color: ${theme.colors.primary100};
  color: ${theme.colors.white};
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.primary80};
  }
`;
