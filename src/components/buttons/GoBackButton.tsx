import { arrowLeft } from "assets/svg";
import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface GoBackButtonProps {
  onClick: () => void;
}

export const GoBackButton: React.FC<GoBackButtonProps> = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return <GoBackStyledButton onClick={goBack}>{arrowLeft}</GoBackStyledButton>;
};

const GoBackStyledButton = styled.button`
  border: none;
  background: none;
`;
