import { bookmarkBlack } from "assets/svg";
import { Typography } from "components/typography/Typography";
import React from "react";
import styled from "styled-components";

interface SaveUnsaveButtonProps {
  onClick: () => void;
  isActive: boolean;
}

export const SaveUnsaveButton: React.FC<SaveUnsaveButtonProps> = ({
  onClick,
  isActive = false,
}) => {
  return (
    <SaveUnsaveStyledButton onClick={onClick}>
      {bookmarkBlack}
      <Typography type="smallTextRegular" color="label">
        {isActive ? "Unsave" : "Save"}
      </Typography>
    </SaveUnsaveStyledButton>
  );
};

const SaveUnsaveStyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  border: none;
  background: none;
`;
