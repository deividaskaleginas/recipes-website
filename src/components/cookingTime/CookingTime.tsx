import { timer } from "assets/svg";
import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import React, { ReactNode } from "react";

interface CookingTimeProps {
  children: ReactNode;
  color?: string;
}

export const CookingTime: React.FC<CookingTimeProps> = ({
  children,
  color,
}) => {
  return (
    <FlexWrapper alignItems="center" gap="0.3125rem" color={color}>
      {timer}
      <Typography type="smallerTextRegular" color="gray3">
        {children} min
      </Typography>
    </FlexWrapper>
  );
};
