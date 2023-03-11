import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import backgroundImg from "../../assets/images/background.jpg";
import hatIcon from "../../assets/images/hat.png";
import { ArrowButton } from "../../components/buttons/ArrowButton";
import { Typography } from "../../components/typography/Typography";
import { FlexWrapper } from "../../components/wrappers/FlexWrapper";

export const GettingStarting: React.FC = () => {
  const navigate = useNavigate();
  return (
    <GettingStartingSection>
      <FlexWrapper flexDirection="column" alignItems="center" gap="0.875rem">
        <img src={hatIcon} alt="chef's hat" />
        <Typography type="mediumTextBold" color="white">
          100K+ Premium Recipes
        </Typography>
      </FlexWrapper>
      <FlexWrapper flexDirection="column" gap="4rem">
        <FlexWrapper
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          gap="1.25rem"
        >
          <Typography type="titleTextBold" color="white" textAlign="center">
            Get <br />
            Cooking
          </Typography>
          <Typography type="normalTextRegular" color="white">
            Simple way to find Tasty Recipe
          </Typography>
        </FlexWrapper>
        <ArrowButton onClick={() => navigate("/login")}>
          Start Cooking
        </ArrowButton>
      </FlexWrapper>
    </GettingStartingSection>
  );
};

const GettingStartingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)),
    url(${backgroundImg});
  background-size: cover;
`;
