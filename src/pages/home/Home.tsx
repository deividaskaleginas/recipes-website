import { NewRecipesSection } from "components/newRecipesSection/NewRecipesSection";
import React, { useContext } from "react";
import styled from "styled-components";
import { ScrollingDishesSection } from "../../components/scrollingDishesSection/ScrollingDishesSection";
import { Typography } from "../../components/typography/Typography";
import { FlexWrapper } from "../../components/wrappers/FlexWrapper";
import UserContext from "../../contexts/userContext/userContext";
import DefaultAvatar from "../../assets/images/userAvatar.png";

export const Home: React.FC = () => {
  const { loggedUserData } = useContext(UserContext);
  return (
    <FlexWrapper flexDirection="column" padding="1.875rem 0 0 1.875rem">
      <FlexWrapper justifyContent="space-between" padding="0 1.875rem 0 0">
        <FlexWrapper flexDirection="column">
          <Typography type="largeTextBold" color="black">
            Hello {loggedUserData.username}
          </Typography>
          <Typography type="smallerTextRegular" color="gray3">
            What are you cooking today?
          </Typography>
        </FlexWrapper>
        <ImageBlockStyled>
          <img src={loggedUserData.avatar || DefaultAvatar} alt="user avatar" />
        </ImageBlockStyled>
      </FlexWrapper>
      <ScrollingDishesSection />
      <NewRecipesSection />
    </FlexWrapper>
  );
};

const ImageBlockStyled = styled.div`
  img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
  }
`;
