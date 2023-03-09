import React, { ReactNode } from "react";
import { FlexWrapper } from "../../wrappers/FlexWrapper";

interface SocialMediaIconBlockProps {
  children: ReactNode | ReactNode[];
}

export const SocialMediaIconBlock: React.FC<SocialMediaIconBlockProps> = ({
  children,
}) => {
  return (
    <FlexWrapper
      alignItems="center"
      justifyContent="center"
      padding="0.625rem"
      borderRadius="0.625rem"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      webkitBoxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    >
      {children}
    </FlexWrapper>
  );
};
