import { Typography } from "components/typography/Typography";
import React from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

export const SendCommentButton: React.FC = () => {
  return (
    <ButtonStyled>
      <Typography type="smallerTextBold" color="white">
        Send
      </Typography>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  position: absolute;
  top: 50%;
  right: -5%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  justify-content: center;
  padding: 0.5625rem 0.9375rem;
  border-radius: 0.625rem;
  background: none;
  border: none;

  background-color: ${theme.colors.primary100};

  @media ${theme.device.tablet} {
    right: -2%;
  }
`;
