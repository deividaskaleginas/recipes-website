import React, { ReactNode } from "react";
import styled from "styled-components";

import { thumbUP, thumbDown } from "../../assets/svg/index";

import { Typography } from "components/typography/Typography";

interface LikeDislikeButtonProps {
  children: ReactNode | ReactNode[];
  onClick: () => void;
  like: boolean;
  isActive: boolean;
}

export const LikeDislikeButton: React.FC<LikeDislikeButtonProps> = ({
  children,
  onClick,
  like,
  isActive,
}) => {
  return (
    <LikeButtonStyled onClick={onClick} isActive={isActive}>
      {like ? thumbUP : thumbDown}
      <Typography type="smallerTextRegular" color="gray1">
        {children}
      </Typography>
    </LikeButtonStyled>
  );
};

const LikeButtonStyled = styled.button<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 0.625rem;
  border: none;
  padding: 0.1875rem 0.3125rem;
  gap: 0.3125rem;
  background-color: ${({ isActive }) => (isActive ? "#71B1A1" : "#DBEBE7")};
`;
