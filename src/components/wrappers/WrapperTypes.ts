import { ReactNode } from "react";
import styled, { css } from "styled-components";

import { Colors } from "../../styles/colors";
import { theme } from "../../styles/theme";

export interface DefaultWrapperProps {
  children: ReactNode | ReactNode[];
  position?: string;
  backgroundColor?: Colors;
  margin?: string;
  padding?: string;
  height?: string;
  width?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  textAlign?: string;
  borderRadius?: string;
  borderTop?: string;
  boxShadow?: string;
  webkitBoxShadow?: string;
  mozBoxShadow?: string;
}

export const Box = styled.div<DefaultWrapperProps>`
  ${({
    position,
    backgroundColor,
    margin,
    padding,
    height,
    width,
    top,
    right,
    bottom,
    left,
    textAlign,
    borderRadius,
    borderTop,
    boxShadow,
    webkitBoxShadow,
    mozBoxShadow,
  }) => css`
    position: ${position || "static"};
    background-color: ${backgroundColor
      ? theme.colors[backgroundColor]
      : "transparent"};
    margin: ${margin || 0};
    padding: ${padding || 0};
    height: ${height || "auto"};
    width: ${width || "auto"};
    top: ${top || "auto"};
    right: ${right || "auto"};
    bottom: ${bottom || "auto"};
    left: ${left || "auto"};
    text-align: ${textAlign || "left"};
    border-radius: ${borderRadius || 0};
    border-top: ${borderTop || "none"};
    box-shadow: ${boxShadow || "none"};
    -webkit-box-shadow: ${webkitBoxShadow || "none"};
    -moz-box-shadow: ${mozBoxShadow || "none"};
  `}
`;
