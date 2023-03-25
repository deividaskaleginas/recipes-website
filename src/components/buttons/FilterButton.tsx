import { Typography } from "components/typography/Typography";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface FilterButtonProps {
  children: ReactNode | ReactNode[];
  active: boolean;
  onClick: () => void | Promise<void>;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  children,
  active,
  onClick,
}) => {
  return (
    <FilterButtonStyled active={active} onClick={onClick}>
      <Typography type="smallerTextBold" color={active ? "white" : "primary80"}>
        {children}
      </Typography>
    </FilterButtonStyled>
  );
};

const FilterButtonStyled = styled.button<{ active: boolean }>`
  display: inline-flex;
  justify-content: center;
  padding: 0.4375rem 1rem;
  border-radius: 0.625rem;
  background: none;
  border: none;
  width: 100%;
  background-color: ${({ active }) => (active ? "#129575" : "none")};
  cursor: pointer;
`;
