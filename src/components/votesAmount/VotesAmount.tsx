import { star } from "assets/svg";
import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

interface VotesAmountProps {
  votes: number[];
  top: string;
  right: string;
}

export const VotesAmount: React.FC<VotesAmountProps> = ({
  votes,
  top,
  right,
}) => {
  const sum = votes.reduce((a, b) => a + b, 0);
  const reiting = Math.round(sum / votes.length) || 0;
  return (
    <RateingBlockStyled top={top} right={right}>
      {star}
      <Typography type="smallerTextRegular" color="black">
        {reiting.toFixed(1)}
      </Typography>
    </RateingBlockStyled>
  );
};

const RateingBlockStyled = styled.div<{
  top: string;
  right: string;
}>`
  position: absolute;
  top: ${({ top }) => top || "auto"};
  right: ${({ right }) => right || "auto"};
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.1875rem 0.4375rem;
  background-color: ${theme.colors.secondary20};
  border-radius: 1.25rem;
`;
