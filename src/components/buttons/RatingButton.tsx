import { Typography } from "components/typography/Typography";
import React from "react";
import styled from "styled-components";

interface RatingButtonProps {
  color: string;
  onClick: () => void;
}

export const RatingButton: React.FC<RatingButtonProps> = ({ color }) => {
  return (
    <RateButtonStyled color={color}>
      <Typography type="smallerTextBold" color="white">
        Send
      </Typography>
    </RateButtonStyled>
  );
};

const RateButtonStyled = styled.button<{ color: string }>`
  border: none;
  border-radius: 0.375rem;
  padding: 0.25rem 1.25rem;
  background-color: ${({ color }) => color};
`;
