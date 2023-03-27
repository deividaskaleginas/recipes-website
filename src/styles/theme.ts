import { colors } from "./colors";
import { DEVICE } from "./devices";
import { typography, TypographyThemeType } from "./typography";

export const theme: ThemeType = {
  colors: colors,
  typography: typography,
  device: DEVICE,
};

interface ThemeType {
  colors: typeof colors;
  typography: TypographyThemeType;
  device: typeof DEVICE;
}
