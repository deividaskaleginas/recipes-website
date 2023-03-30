import React from "react";
import styled from "styled-components";

import caretLeft from "../../assets/svg/caretLeft.svg";
import { theme } from "styles/theme";
import { CaretRightIcon } from "components/icons/CaretRightIcon";
import { CaretLeftIcon } from "components/icons/CaretLeftIcon";

interface CaretButtonProps {
  onClick: () => void;
  isRight?: boolean;
}

export const CaretButton: React.FC<CaretButtonProps> = ({
  onClick,
  isRight,
}) => {
  return (
    <CaretButtonStyled onClick={onClick}>
      {isRight ? <CaretRightIcon /> : <CaretLeftIcon />}
    </CaretButtonStyled>
  );
};

const CaretButtonStyled = styled.button`
  display: inline-block;
  align-items: center;
  padding: 1rem;
  border: none;
  background: none;
  cursor: pointer;
  .caretRight:hover,
  .caretLeft:hover {
    fill: ${theme.colors.secondary100};
  }
`;
