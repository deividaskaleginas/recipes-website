import React from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

export const Loader: React.FC = () => {
  return <LoaderStyled />;
};

const LoaderStyled = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  border: 0.625rem solid ${theme.colors.loader};
  border-top: 0.625rem solid ${theme.colors.primary100};
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: spin 1s linear infinite;
`;
