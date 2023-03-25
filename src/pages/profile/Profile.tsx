import { SavedAndPostedRecipesCards } from "components/savedAndPostedRecipesCards/SavedAndPostedRecipesCards";
import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import DishesContext from "contexts/dishesContext/dishesContext";
import UserContext from "contexts/userContext/userContext";
import React, { useContext } from "react";
import styled from "styled-components";

export const Profile: React.FC = () => {
  const { loggedUserData } = useContext(UserContext);
  const { dishesData } = useContext(DishesContext);

  const userRecipes = dishesData.filter(
    (recipe) => recipe.authorData.id === loggedUserData.uid
  );

  return (
    <FlexWrapper
      flexDirection="column"
      padding="3.375rem 1.875rem 8.125rem 1.875rem"
    >
      <FlexWrapper justifyContent="center">
        <Typography type="mediumTextBold" color="black">
          Profile
        </Typography>
      </FlexWrapper>

      <FlexWrapper flexDirection="column" gap="0.9375rem">
        <FlexWrapper alignItems="center" justifyContent="space-between">
          <FlexWrapper>
            <UserPhotoStyle src={loggedUserData.avatar} alt="user profile" />
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
        </FlexWrapper>
        <FlexWrapper justifyContent="flex-start">
          <Typography type="normalTextBold" color="label">
            {loggedUserData.username}
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper flexDirection="column" gap="1.25rem">
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
      </FlexWrapper>
    </FlexWrapper>
  );
};

const UserPhotoStyle = styled.img`
  height: 6.1875rem;
  width: 6.1875rem;
  border-radius: 50%;
  object-fit: cover;
`;
