import React, { useContext, useState } from "react";

import { signOut } from "firebase/auth";
import { auth } from "utils/firebase/firebaseConfig";
import UserContext from "contexts/userContext/userContext";
import { useNavigate } from "react-router-dom";

import { RouteNames } from "types/routes";
import styled from "styled-components";
import { theme } from "styles/theme";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { Typography } from "components/typography/Typography";
import { NAVIGATION_LINKS } from "constants/navLinksConstants";
import { FilterButton } from "components/buttons/FilterButton";

import DefaultAvatar from "../../assets/images/userAvatar.png";
import { HeaderNavLink } from "components/buttons/HeaderNavLink";

export const Header: React.FC = () => {
  const { loggedUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const [isActive, setActive] = useState<string>("Home");

  const handleSignOut = async () => {
    await signOut(auth);
    navigate(RouteNames.LOGIN);
  };

  return (
    <HeaderStyled>
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
          <HeaderNavLink
            key={index}
            isActive={isActive === name}
            to={link}
            onClick={() => setActive(name)}
          >
            {name}
          </HeaderNavLink>
        ))}
      </HeaderNavLinks>
      <FlexWrapper alignItems="center">
        <FilterButton active={false} onClick={() => handleSignOut()}>
          Logout
        </FilterButton>
        <ImageBlockStyled>
          <img src={loggedUserData.avatar || DefaultAvatar} alt="user avatar" />
        </ImageBlockStyled>
      </FlexWrapper>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  display: none;
  justify-content: space-between;
  align-items: center;
  max-width: 75rem;
  margin: 0 auto;
  padding: 1rem 1.875rem 0 1.875rem;

  @media ${theme.device.tablet} {
    display: flex;
  }
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
  }
`;

const ImageBlockStyled = styled.div`
  img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
  }
`;
