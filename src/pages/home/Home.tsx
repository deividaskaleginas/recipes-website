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
import { NAVIGATION_LINKS } from "constants/navLinksConstants";
import { NavLink } from "react-router-dom";
import { theme } from "styles/theme";

export const Home: React.FC = () => {
  const { loggedUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate(RouteNames.LOGIN);
  };

  return (
    <HomePageSectionStyled>
      <HomeHeader>
        <FlexWrapper flexDirection="column">
          <Typography type="largeTextBold" color="black">
            Hello {loggedUserData.username}
          </Typography>
          <Typography type="smallerTextRegular" color="gray3">
            What are you cooking today?
          </Typography>
        </FlexWrapper>
        <HeaderNavLinks>
          {NAVIGATION_LINKS.map(({ name, link }, index) => (
            <NavLink key={index} to={link}>
              {name}
            </NavLink>
          ))}
        </HeaderNavLinks>
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
      </HomeHeader>
      <ScrollingDishesSection />
      <NewRecipesSection />
    </HomePageSectionStyled>
  );
};

const HomePageSectionStyled = styled.section`
  max-width: 75rem;
  padding: 1.875rem 0 0 1.875rem;
  margin: 0 auto;
`;

const HomeHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.875rem 0 0;

  @media ${theme.device.tablet} {
    display: none;
  } ;
`;

const HeaderNavLinks = styled.div`
  display: none;
  gap: 1.875rem;
  a {
    color: ${theme.colors.primary100};
  }

  a:hover,
  a:active {
    color: ${theme.colors.secondary100};
  }

  @media ${theme.device.tablet} {
    display: flex;
  } ;
`;

const ImageBlockStyled = styled.div`
  img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
  }
`;
