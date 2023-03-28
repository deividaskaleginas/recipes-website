import { SavedAndPostedRecipesCards } from "components/savedAndPostedRecipesCards/SavedAndPostedRecipesCards";
import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import DishesContext from "contexts/dishesContext/dishesContext";
import UserContext from "contexts/userContext/userContext";
import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

export const Saved: React.FC = () => {
  const { loggedUserData } = useContext(UserContext);
  const { dishesData } = useContext(DishesContext);

  const userSavedRecipesID = loggedUserData.favorites;

  const filteredUserSavedRecipes = dishesData.filter((recipe) => {
    return userSavedRecipesID.some((userSavedRecipeID) => {
      return userSavedRecipeID === recipe.id;
    });
  });
  return (
    <SavedRecipesSection>
      <FlexWrapper justifyContent="center">
        <Typography type="mediumTextBold" color="label">
          Saved recipes
        </Typography>
      </FlexWrapper>
      <SavedRecipesBlock>
        {filteredUserSavedRecipes.map(
          ({ title, time, photo, id, votes, authorData }) => (
            <SavedAndPostedRecipesCards
              key={id}
              id={id}
              title={title}
              time={time}
              photo={photo}
              votes={votes}
              authorData={authorData}
            />
          )
        )}
      </SavedRecipesBlock>
    </SavedRecipesSection>
  );
};

const SavedRecipesSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 75rem;
  padding: 3.375rem 1.875rem 0 1.875rem;
  gap: 0.625rem;
`;

const SavedRecipesBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media ${theme.device.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
  }
`;
