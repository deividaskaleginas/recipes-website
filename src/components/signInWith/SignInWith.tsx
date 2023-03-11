import React, { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Typography } from "../typography/Typography";
import { FlexWrapper } from "../wrappers/FlexWrapper";

import { google, facebook } from "../../assets/svg/index";
import { SocialMediaIconBlock } from "./socialMediaIconBlock/SocialMediaIconBlock";

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
      <FlexWrapper gap="25px" justifyContent="center">
        <SocialMediaIconBlock>
          <a target="_blank" href="https://google.com" rel="noreferrer">
            {google}
          </a>
        </SocialMediaIconBlock>
        <SocialMediaIconBlock>
          <a target="_blank" href="https://facebook.com" rel="noreferrer">
            {facebook}
          </a>
        </SocialMediaIconBlock>
      </FlexWrapper>
    </FlexWrapper>
  );
};

const StyledLine = styled.div`
  width: 3.125rem;
  border-top: 1px solid ${theme.colors.gray4};
`;
