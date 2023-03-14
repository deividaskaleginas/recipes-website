import { SavedRecipesCards } from "components/savedRecipesCards/SavedRecipesCards";
import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import DishesContext from "contexts/dishesContext/dishesContext";
import UserContext from "contexts/userContext/userContext";
import React, { useContext } from "react";

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
    <FlexWrapper
      flexDirection="column"
      padding="3.375rem 1.875rem 0 1.875rem"
      gap="0.625rem"
    >
      <FlexWrapper justifyContent="center">
        <Typography type="mediumTextBold" color="label">
          Saved recipes
        </Typography>
      </FlexWrapper>
      <FlexWrapper flexDirection="column" gap="1.25rem">
        {filteredUserSavedRecipes.map(
          ({ title, time, photo, id, votes, authorData }) => (
            <SavedRecipesCards
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
      </FlexWrapper>
    </FlexWrapper>
  );
};
