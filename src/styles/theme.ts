import { colors } from "./colors";
import { typography, TypographyThemeType } from "./typography";

export const theme: ThemeType = {
  colors: colors,
  typography: typography,
};

interface ThemeType {
  colors: typeof colors;
  typography: TypographyThemeType;
}
