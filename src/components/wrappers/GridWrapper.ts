import styled from "styled-components";
import { Property } from "csstype";

import { Box, DefaultWrapperProps } from "./WrapperTypes";

interface GridWrapperProps extends DefaultWrapperProps {
  columns?: number;
  gap?: string;
  alignContent?: Property.AlignContent;
  justifyContent?: Property.JustifyContent;
}

export const GridWrapper = styled(Box)<GridWrapperProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-gap: ${({ gap }) => gap || "1rem"};
  align-content: ${({ alignContent }) => alignContent || "stretch"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
`;
