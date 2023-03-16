import { dots } from "assets/svg";
import React from "react";
import styled from "styled-components";

interface OpenMoreProps {
  onClick: () => void;
}

export const OpenMore: React.FC<OpenMoreProps> = ({ onClick }) => {
  return <OpenMoreStyledButton onClick={onClick}>{dots}</OpenMoreStyledButton>;
};

const OpenMoreStyledButton = styled.button`
  border: none;
  background: none;
`;
