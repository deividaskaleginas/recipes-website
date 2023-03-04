import styled from "styled-components";
import { Property } from "csstype";

import { Box, DefaultWrapperProps } from "./WrapperTypes";

interface FlexWrapperProps extends DefaultWrapperProps {
  flexDirection?: Property.FlexDirection;
  gap?: string;
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
}

export const FlexWrapper = styled(Box)<FlexWrapperProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  gap: ${({ gap }) => gap || "0rem"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
`;
