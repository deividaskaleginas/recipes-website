import { ReactNode } from "react";
import { Property } from "csstype";

import styled, { css } from "styled-components";

import { Colors } from "../../styles/colors";
import { theme } from "../../styles/theme";
import { type } from "os";

export type TypographyTypes = keyof typeof TypographyHtmlTag;

enum TypographyHtmlTag {
  "titleTextBold" = "h1",
  "headerTextBold" = "h2",
  "largeTextBold" = "h3",
  "mediumTextBold" = "h4",
  "normalTextBold" = "p",
  "smallTextBold" = "p",
  "smallerTextBold" = "p",
  "titleTextRegular" = "h1",
  "headerTextRegular" = "h2",
  "largeTextRegular" = "h3",
  "mediumTextRegular" = "h4",
  "normalTextRegular" = "p",
  "smallTextRegular" = "p",
  "smallerTextRegular" = "p",
  "smallerTextSemiBold" = "p",
}

//NOTE: extends - TypographyProps pasipildo TextStyles propsais
interface TypographyProps extends TextStyles {
  children: ReactNode | ReactNode[];
}

interface TextStyles {
  type?: TypographyTypes;
  color?: Colors;
  margin?: string;
  textAlign?: Property.TextAlign;
  numberOfLines?: number;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  type = "normalTextRegular",
  color,
  ...props
}) => {
  return (
    <TextStyled
      as={TypographyHtmlTag[type]}
      type={type}
      color={color}
      {...props}
    >
      {children}
    </TextStyled>
  );
};

const TextStyled = styled.h1<TextStyles>`
  ${({ color, type, margin, textAlign, numberOfLines }) => css`
    margin: ${margin || 0};
    text-align: ${textAlign || "start"};
    color: ${color ? theme.colors[color] : theme.colors.label};
    font-size: ${type
      ? theme.typography[type].fontSize
      : theme.typography.normalTextRegular.fontSize};
    font-weight: ${type
      ? theme.typography[type].fontWeight
      : theme.typography.normalTextRegular.fontWeight};
    line-height: ${type
      ? theme.typography[type].lineHeight
      : theme.typography.normalTextRegular.lineHeight};
    -webkit-line-clamp: ${numberOfLines ? numberOfLines : "none"};
    -webkit-box-orient: ${numberOfLines ? "vertical" : "inline-axis"};
    display: ${numberOfLines ? "-webkit-box" : "?"};
    overflow: ${numberOfLines ? "hidden" : "visible"};

    @media ${theme.device.tablet} {
      font-size: ${type
        ? theme.typography[type].fontSizeTablet
        : theme.typography.normalTextRegular.fontSizeTablet};
    }
  `}
`;
