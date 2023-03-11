import React from "react";
import { ReactNode } from "react";

import styled, { css } from "styled-components";

import { theme } from "../../styles/theme";

import { arrowRight } from "../../assets/svg/index";
import { Typography } from "../typography/Typography";

interface ArrowButtonProps extends ArrowButtonStyles {
  children: ReactNode | ReactNode[];
}

interface ArrowButtonStyles {
  padding?: string;
  width?: string;
  onClick: () => void;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  children,
  padding,
  width,
  ...props
}) => {
  return (
    <ArrowButtonStyled padding={padding} width={width} {...props}>
      <Typography type="normalTextBold" color="white">
        {children}
      </Typography>
      {arrowRight}
    </ArrowButtonStyled>
  );
};

const ArrowButtonStyled = styled.button<ArrowButtonProps>`
  ${({ width, padding }) => css`
    display: inline-flex;
    justify-content: center;
    gap: 15px;
    height: 3.375rem;
    min-width: ${width || "15.1875rem"};
    padding: ${padding || "0.9375rem 3.125rem"};
    border: none;
    border-radius: 0.625rem;
    background-color: ${theme.colors.primary100};
    color: ${theme.colors.white};
    align-items: center;

    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.primary80};
    }
  `}
`;
