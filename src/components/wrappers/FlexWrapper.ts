import styled from "styled-components";
import { Property } from "csstype";

import { Box, DefaultWrapperProps } from "./WrapperTypes";

interface FlexWrapperProps extends DefaultWrapperProps {
  flexDirection?: Property.FlexDirection;
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
}

export const FlexWrapper = styled(Box)<FlexWrapperProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
`;
