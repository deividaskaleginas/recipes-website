import { SavedAndPostedRecipesCards } from "components/savedAndPostedRecipesCards/SavedAndPostedRecipesCards";
import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import DishesContext from "contexts/dishesContext/dishesContext";
import UserContext from "contexts/userContext/userContext";
import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";
import DefaultAvatar from "../../assets/images/userAvatar.png";

export const Profile: React.FC = () => {
  const { loggedUserData } = useContext(UserContext);
  const { dishesData } = useContext(DishesContext);

  const userRecipes = dishesData.filter(
    (recipe) => recipe.authorData.id === loggedUserData.uid
  );

  return (
    <ProfileSection>
      <ProfileSectionName>
        <Typography type="mediumTextBold" color="black">
          Profile
        </Typography>
      </ProfileSectionName>

      <FlexWrapper flexDirection="column" gap="0.9375rem">
        <UserDataBlock>
          <FlexWrapper>
            <UserPhotoStyle
              src={loggedUserData.avatar || DefaultAvatar}
              alt="user profile"
            />
          </FlexWrapper>
          <FlexWrapper flexDirection="column" alignItems="center">
            <FlexWrapper>
              <Typography type="smallerTextRegular" color="gray3">
                Recipes
              </Typography>
            </FlexWrapper>
            <FlexWrapper>
              <Typography type="largeTextBold" color="label">
                {userRecipes.length}
              </Typography>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper flexDirection="column" alignItems="center">
            <FlexWrapper>
              <Typography type="smallerTextRegular" color="gray3">
                Saved
              </Typography>
            </FlexWrapper>
            <FlexWrapper>
              <Typography type="largeTextBold" color="label">
                {loggedUserData.favorites.length}
              </Typography>
            </FlexWrapper>
          </FlexWrapper>
        </UserDataBlock>
        <UserProfileNameBlock>
          <Typography type="normalTextBold" color="label">
            {loggedUserData.username}
          </Typography>
        </UserProfileNameBlock>
      </FlexWrapper>
      <AddedRecipesBlock>
        {userRecipes.map(({ title, time, photo, id, votes, authorData }) => (
          <SavedAndPostedRecipesCards
            key={id}
            id={id}
            title={title}
            time={time}
            photo={photo}
            votes={votes}
            authorData={authorData}
          />
        ))}
      </AddedRecipesBlock>
    </ProfileSection>
  );
};

const ProfileSection = styled.section`
  max-width: 75rem;
  margin: 0 auto;
  padding: 3.375rem 1.875rem 8.125rem 1.875rem;
`;

const ProfileSectionName = styled.div`
  display: flex;
  justify-content: center;

  @media ${theme.device.tablet} {
    display: none;
  }
`;

const UserDataBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${theme.device.tablet} {
    justify-content: flex-end;
    gap: 3rem;
    padding-bottom: 2rem;
  }
`;

const UserProfileNameBlock = styled.div`
  @media ${theme.device.tablet} {
    display: none;
  }
`;

const UserPhotoStyle = styled.img`
  height: 6.1875rem;
  width: 6.1875rem;
  border-radius: 50%;
  object-fit: cover;

  @media ${theme.device.tablet} {
    display: none;
  }
`;

const AddedRecipesBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media ${theme.device.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
  }
`;
