import React, { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Typography } from "../typography/Typography";
import { FlexWrapper } from "../wrappers/FlexWrapper";

interface SignInWithProps {
  children: ReactNode | ReactNode[];
}

export const SignInWith: React.FC<SignInWithProps> = ({ children }) => {
  return (
    <FlexWrapper flexDirection="column" gap="1.25rem">
      <FlexWrapper alignItems="center" gap="0.4375rem">
        <StyledLine></StyledLine>
        <Typography type="smallerTextSemiBold" color="gray4">
          {children}
        </Typography>
        <StyledLine></StyledLine>
      </FlexWrapper>
    </FlexWrapper>
  );
};

const StyledLine = styled.div`
  width: 3.125rem;
  border-top: 1px solid ${theme.colors.gray4};
`;
