import { Typography } from "components/typography/Typography";
import React from "react";
import styled from "styled-components";

interface ProcedureButtonProps {
  onClick: () => void;
  isActive: boolean;
}

export const ProcedureButton: React.FC<ProcedureButtonProps> = ({
  onClick,
  isActive,
}) => {
  return (
    <IngredientsButtonStyled isActive={isActive} onClick={onClick}>
      <Typography color={isActive ? "primary80" : "white"} type="smallTextBold">
        Procedure
      </Typography>
    </IngredientsButtonStyled>
  );
};

const IngredientsButtonStyled = styled.button<{ isActive: boolean }>`
  display: inline-flex;
  justify-content: center;
  padding: 0.5rem 0 0.5rem 0;
  border-radius: 0.625rem;
  background: none;
  border: none;
  width: 100%;
  background-color: ${({ isActive }) => (isActive ? "none" : "#129575")};
`;
