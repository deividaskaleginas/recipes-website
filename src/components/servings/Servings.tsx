import { servings } from "assets/svg";
import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import React from "react";

interface ServingsProps {
  portions: string;
}

export const Servings: React.FC<ServingsProps> = ({ portions }) => {
  return (
    <FlexWrapper alignItems="center" gap="0.3125rem" padding="5px 0">
      <FlexWrapper>{servings}</FlexWrapper>
      <FlexWrapper>
        <Typography type="smallerTextRegular" color="gray3">
          {portions} servings
        </Typography>
      </FlexWrapper>
    </FlexWrapper>
  );
};
