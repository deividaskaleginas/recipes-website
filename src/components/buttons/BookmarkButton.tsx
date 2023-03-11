import React from "react";
import styled from "styled-components";
import { savedActive, inactiveBookmark } from "../../assets/svg";
import { theme } from "../../styles/theme";

interface BookmarkButtonProps {
  onClick: () => void;
  isActive?: boolean;
}

export const BookmarkButton: React.FC<BookmarkButtonProps> = ({
  onClick,
  isActive = false,
}) => {
  return (
    <ButtonStyled onClick={onClick}>
      {isActive ? savedActive : inactiveBookmark}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;
  border: none;
  border-radius: 50%;
  background: ${theme.colors.white};

  cursor: pointer;
`;
