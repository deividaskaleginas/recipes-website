import React from "react";
import styled from "styled-components";
import { arrowRight } from "../../assets/svg/index";
import { theme } from "../../styles/theme";
// import { NormalTextBold } from "../typography/Typography";

type ArrowButtonProps = {
  children: string;
  padding: string;
  width: string;
};

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  children,
  padding,
  width,
}) => {
  return (
    <ArrowButtonStyled padding={padding} width={width}>
      {/* <NormalTextBold> */}
      {children} {arrowRight}
      {/* </NormalTextBold> */}
    </ArrowButtonStyled>
  );
};

interface ArrowButtonStyles {
  width?: string;
  padding: string;
}

const ArrowButtonStyled = styled.button<ArrowButtonStyles>`
  min-width: ${(props) => props.width};
  border: none;
  border-radius: 0.625rem;
  background-color: ${() => theme.colors.primary100};
  padding: ${(props) => props.padding};

  color: ${() => theme.colors.white};
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${() => theme.colors.primary80};
  }
`;
