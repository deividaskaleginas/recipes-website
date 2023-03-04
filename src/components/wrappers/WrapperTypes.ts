import { ReactNode } from "react";
import styled from "styled-components";

import { Colors } from "../../styles/colors";
import { theme } from "../../styles/theme";

export interface DefaultWrapperProps {
  children: ReactNode | ReactNode[];
  backgroundColor?: Colors;
  margin?: string;
  padding?: string;
}

export const Box = styled.div<DefaultWrapperProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? theme.colors[backgroundColor] : "transparent"};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
`;
