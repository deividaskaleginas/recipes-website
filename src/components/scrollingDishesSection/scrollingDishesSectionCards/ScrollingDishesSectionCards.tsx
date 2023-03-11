import { title } from "process";
import React from "react";
import { Typography } from "../../typography/Typography";
import { FlexWrapper } from "../../wrappers/FlexWrapper";

interface SrollingDishesSectionCardsProps {
  id?: string;
  image?: string;
  title?: string;
  time?: string;
  rate?: string;
}

export const SrollingDishesSectionCards: React.FC<
  SrollingDishesSectionCardsProps
> = ({ title, time }) => {
  return (
    <FlexWrapper>
      <Typography type="smallTextBold" color="gray1">
        {title}
      </Typography>
      <FlexWrapper>
        <FlexWrapper flexDirection="column">
          <Typography type="smallerTextRegular" color="gray3">
            Time
          </Typography>
          <Typography type="smallerTextBold" color="gray1">
            {time}
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};
