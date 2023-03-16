import { message } from "assets/svg";
import { Typography } from "components/typography/Typography";
import React from "react";
import styled from "styled-components";

interface ReviewButtonProps {
  onClick: () => void;
}

export const ReviewButton: React.FC<ReviewButtonProps> = ({ onClick }) => {
  return (
    <ReviewStyledButton>
      {message}
      <Typography type="smallTextRegular" color="label">
        Review
      </Typography>
    </ReviewStyledButton>
  );
};

const ReviewStyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  border: none;
  background: none;
`;
