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
  minWidth?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  textAlign?: string;
  borderRadius?: string;
  borderTop?: string;
  opacity?: number;
  boxShadow?: string;
  overflowX?: string;
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
    minWidth,
    top,
    right,
    bottom,
    left,
    textAlign,
    borderRadius,
    borderTop,
    boxShadow,
    overflowX,
    opacity,
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
    min-width: ${minWidth || 0};
    width: ${width || "auto"};
    top: ${top || "auto"};
    right: ${right || "auto"};
    bottom: ${bottom || "auto"};
    left: ${left || "auto"};
    text-align: ${textAlign || "left"};
    border-radius: ${borderRadius || 0};
    border-top: ${borderTop || "none"};
    opacity: ${opacity || 1};
    box-shadow: ${boxShadow || "none"};
    overflow-x: ${overflowX || "visible"};
    -webkit-box-shadow: ${webkitBoxShadow || "none"};
    -moz-box-shadow: ${mozBoxShadow || "none"};
  `}
`;
