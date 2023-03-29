import { close } from "assets/svg";
import React from "react";
import styled from "styled-components";

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return <CloseButtonStyled onClick={onClick}>{close}</CloseButtonStyled>;
};

const CloseButtonStyled = styled.button`
  position: absolute;
  right: 0.9375rem;
  top: 0.625rem;
  border: none;
  background: none;
  cursor: pointer;
`;
