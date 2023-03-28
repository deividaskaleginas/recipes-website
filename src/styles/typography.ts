export interface TypographyThemeType {
  fontFamily: FontFamily;
  titleTextBold: TextStyleParams;
  headerTextBold: TextStyleParams;
  largeTextBold: TextStyleParams;
  mediumTextBold: TextStyleParams;
  normalTextBold: TextStyleParams;
  smallTextBold: TextStyleParams;
  smallerTextBold: TextStyleParams;
  titleTextRegular: TextStyleParams;
  headerTextRegular: TextStyleParams;
  largeTextRegular: TextStyleParams;
  mediumTextRegular: TextStyleParams;
  normalTextRegular: TextStyleParams;
  smallTextRegular: TextStyleParams;
  smallerTextRegular: TextStyleParams;
  smallerTextSemiBold: TextStyleParams;
}

export interface FontFamily {
  regular: string;
}

export interface TextStyleParams {
  fontSize: string;
  fontSizeTablet: string;
  fontWeight: number;
  lineHeight: string;
}

export const typography: TypographyThemeType = {
  fontFamily: {
    regular: "Poppins",
  },
  titleTextBold: {
    fontSize: "3.125rem",
    fontSizeTablet: "4.124rem",
    fontWeight: 600,
    lineHeight: "4.6875rem",
  },
  headerTextBold: {
    fontSize: "1.875rem",
    fontSizeTablet: "2.875rem",
    fontWeight: 600,
    lineHeight: "2.8125rem",
  },
  largeTextBold: {
    fontSize: "1.25rem",
    fontSizeTablet: "1.65rem",
    fontWeight: 600,
    lineHeight: "1.875rem",
  },
  mediumTextBold: {
    fontSize: "1.125rem",
    fontSizeTablet: "2.124rem",
    fontWeight: 600,
    lineHeight: "1.6875rem",
  },
  normalTextBold: {
    fontSize: "1rem",
    fontSizeTablet: "1.5rem",
    fontWeight: 600,
    lineHeight: "1.5rem",
  },
  smallTextBold: {
    fontSize: "0.875rem",
    fontSizeTablet: "1.3rem",
    fontWeight: 600,
    lineHeight: "1.3125rem",
  },
  smallerTextBold: {
    fontSize: "0.6875rem",
    fontSizeTablet: "1.1rem",
    fontWeight: 600,
    lineHeight: "1.0625rem",
  },
  titleTextRegular: {
    fontSize: "3.125rem",
    fontSizeTablet: "4.124rem",
    fontWeight: 400,
    lineHeight: "4.6875rem",
  },
  headerTextRegular: {
    fontSize: "1.875rem",
    fontSizeTablet: "2.124rem",
    fontWeight: 400,
    lineHeight: "2.8125rem",
  },
  largeTextRegular: {
    fontSize: "1.25rem",
    fontSizeTablet: "2.124rem",
    fontWeight: 400,
    lineHeight: "1.875rem",
  },
  mediumTextRegular: {
    fontSize: "1.125rem",
    fontSizeTablet: "2.124rem",
    fontWeight: 400,
    lineHeight: "1.6875rem",
  },
  normalTextRegular: {
    fontSize: "1rem",
    fontSizeTablet: "2.124rem",
    fontWeight: 400,
    lineHeight: "1.5rem",
  },
  smallTextRegular: {
    fontSize: "0.875rem",
    fontSizeTablet: "1.3rem",
    fontWeight: 400,
    lineHeight: "1.3125rem",
  },
  smallerTextRegular: {
    fontSize: "0.6875rem",
    fontSizeTablet: "1.2rem",
    fontWeight: 400,
    lineHeight: "1.0625rem",
  },
  smallerTextSemiBold: {
    fontSize: "0.6875rem",
    fontSizeTablet: "1.124rem",
    fontWeight: 500,
    lineHeight: "1.0313rem",
  },
};
