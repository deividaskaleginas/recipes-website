import { Servings } from "components/servings/Servings";
import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import React from "react";
import { ProcedureType } from "types/userDataTypes";

interface StepsProps {
  procedure: ProcedureType[];
  portions: string;
}

export const Steps: React.FC<StepsProps> = ({ procedure, portions }) => (
  <FlexWrapper flexDirection="column" gap="0.625rem">
    <FlexWrapper justifyContent="space-between" alignItems="center">
      <Servings portions={portions} />
      <FlexWrapper>
        <Typography type="smallerTextRegular" color="gray3">
          {procedure.length} {procedure.length > 1 ? "Steps" : "Step"}
        </Typography>
      </FlexWrapper>
    </FlexWrapper>
    {procedure.map((item, index) => (
      <FlexWrapper
        flexDirection="column"
        gap="0.3125rem"
        padding="0.625rem 0.9375rem"
        backgroundColor="gray4"
        borderRadius="0.75rem"
        width="100%"
        key={index}
      >
        <Typography type="smallerTextBold" color="label">
          Step {index + 1}
        </Typography>
        <Typography type="smallerTextRegular" color="gray3">
          {item.step}
        </Typography>
      </FlexWrapper>
    ))}
  </FlexWrapper>
);
