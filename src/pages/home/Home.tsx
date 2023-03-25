import { NewRecipesSection } from "components/newRecipesSection/NewRecipesSection";
import React, { useContext } from "react";
import styled from "styled-components";
import { ScrollingDishesSection } from "../../components/scrollingDishesSection/ScrollingDishesSection";
import { Typography } from "../../components/typography/Typography";
import { FlexWrapper } from "../../components/wrappers/FlexWrapper";
import UserContext from "../../contexts/userContext/userContext";
import DefaultAvatar from "../../assets/images/userAvatar.png";
import { FilterButton } from "components/buttons/FilterButton";
import { signOut } from "firebase/auth";
import { auth } from "utils/firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "types/routes";

export const Home: React.FC = () => {
  const { loggedUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate(RouteNames.LOGIN);
  };

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
        <FlexWrapper alignItems="center">
          <FilterButton active={false} onClick={() => handleSignOut()}>
            Logout
          </FilterButton>
          <ImageBlockStyled>
            <img
              src={loggedUserData.avatar || DefaultAvatar}
              alt="user avatar"
            />
          </ImageBlockStyled>
        </FlexWrapper>
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
