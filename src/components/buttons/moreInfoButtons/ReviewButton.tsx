import { message } from "assets/svg";
import { Typography } from "components/typography/Typography";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ReviewButtonProps {
  id: string;
  onClick: () => void;
}

export const ReviewButton: React.FC<ReviewButtonProps> = ({ onClick, id }) => {
  return (
    <ReviewStyledButton onClick={onClick}>
      {message}
      <Link to={`/comments/${id}`}>
        {" "}
        <Typography type="smallTextRegular" color="label">
          Review
        </Typography>
      </Link>
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
