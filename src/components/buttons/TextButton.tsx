import React, { ReactNode } from "react";
import styled from "styled-components";

import { Typography } from "../typography/Typography";

interface TextButtonProps {
  children: ReactNode | ReactNode[];
  onClick: () => void;
}

export const TextButton: React.FC<TextButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <Button type="button" onClick={onClick}>
      <Typography type="normalTextBold" color="secondary100">
        {children}
      </Typography>
    </Button>
  );
};

const Button = styled.button`
  display: inline-block;
  background: none;
  border: none;
  cursor: pointer;
`;
