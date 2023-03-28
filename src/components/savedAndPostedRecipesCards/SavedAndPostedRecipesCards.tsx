import { FlexWrapper } from "components/wrappers/FlexWrapper";
import React from "react";
import { useSaveToFavoritesRecipe } from "hooks/useSaveToFavoritesRecipe";
import styled from "styled-components";
import { AuthorType } from "types/userDataTypes";
import { Typography } from "components/typography/Typography";
import { CookingTime } from "components/cookingTime/CookingTime";
import { BookmarkButton } from "components/buttons/BookmarkButton";
import { VotesAmount } from "components/votesAmount/VotesAmount";
import { theme } from "styles/theme";

interface SavedRecipesCardsProps {
  id: string;
  title: string;
  authorData: AuthorType;
  time: string;
  votes: number[];
  photo: string;
}

export const SavedAndPostedRecipesCards: React.FC<SavedRecipesCardsProps> = ({
  title,
  time,
  id,
  authorData,
  votes,
  photo,
}) => {
  const { saveRecipe, isRecipeInFavorites } = useSaveToFavoritesRecipe(id);
  return (
    <SavedRecipeStyledCard photo={photo}>
      <FlexWrapper>
        <Typography type="smallTextBold" color="white">
          {title}
        </Typography>
      </FlexWrapper>
      <FlexWrapper justifyContent="space-between">
        <FlexWrapper alignItems="center" justifyContent="space-between">
          <Typography type="smallerTextRegular" color="gray4">
            By {authorData.username}
          </Typography>
        </FlexWrapper>
        <FlexWrapper gap="0.625rem">
          <CookingTime>{time}</CookingTime>
          <BookmarkButton isActive={isRecipeInFavorites} onClick={saveRecipe} />
        </FlexWrapper>
      </FlexWrapper>
      <VotesAmount votes={votes} top="1.25rem" right="-0.625rem" />
    </SavedRecipeStyledCard>
  );
};

const SavedRecipeStyledCard = styled.div<{ photo: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 0.625rem 0.625rem 0.625rem;
  height: 9.375rem;
  border-radius: 10px;
  overflow: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), #00000071),
    url(${({ photo }) => photo});
  background-size: cover;

  @media ${theme.device.tablet} {
    height: 12rem;
  }
`;
