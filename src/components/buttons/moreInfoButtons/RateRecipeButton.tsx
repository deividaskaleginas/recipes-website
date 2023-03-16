import { blackStar } from "assets/svg";
import { Typography } from "components/typography/Typography";
import React from "react";
import styled from "styled-components";

interface RateRecipeButtonProps {
  onClick: () => void;
}

export const RateRecipeButton: React.FC<RateRecipeButtonProps> = ({
  onClick,
}) => {
  return (
    <RateRecipeStyledButton onClick={onClick}>
      {blackStar}
      <Typography type="smallTextRegular" color="label">
        Rate Recipe
      </Typography>
    </RateRecipeStyledButton>
  );
};

const RateRecipeStyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  border: none;
  background: none;
`;
