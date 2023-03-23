import { BookmarkButton } from "components/buttons/BookmarkButton";
import { CookingTime } from "components/cookingTime/CookingTime";
import { Typography } from "components/typography/Typography";
import { VotesAmount } from "components/votesAmount/VotesAmount";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import CommentsContext from "contexts/commentsContext/commentsContext";
import { useSaveToFavoritesRecipe } from "hooks/useSaveToFavoritesRecipe";
import React, { useContext } from "react";
import styled from "styled-components";
import { AuthorType } from "types/userDataTypes";

interface OpenedRecipeDataProps {
  id: string;
  title: string;
  authorData: AuthorType[];
  time: string;
  votes: number[];
  photo: string;
}

export const OpenedRecipeData: React.FC<OpenedRecipeDataProps> = ({
  title,
  time,
  id,
  authorData,
  votes,
  photo,
}) => {
  const { saveRecipe, isRecipeInFavorites } = useSaveToFavoritesRecipe(id);
  const { commentsData } = useContext(CommentsContext);

  const filteredComments = commentsData.filter(
    (comment) => comment.dishId === id
  );
  return (
    <FlexWrapper flexDirection="column">
      <RecipePhotoBlock photo={photo}>
        <FlexWrapper justifyContent="flex-end" gap="0.625rem">
          <CookingTime>{time}</CookingTime>
          <BookmarkButton isActive={isRecipeInFavorites} onClick={saveRecipe} />
        </FlexWrapper>
        <VotesAmount votes={votes} top="1.25rem" right="-0.625rem" />
      </RecipePhotoBlock>
      <FlexWrapper justifyContent="space-between" gap="1.125rem">
        <Typography type="smallTextBold" color="black">
          {title}
        </Typography>
        <Typography type="smallTextRegular" color="gray3">
          ({filteredComments.length} Reviews)
        </Typography>
      </FlexWrapper>
      {authorData?.map(({ avatar, username }) => (
        <FlexWrapper alignItems="center" gap="0.625rem">
          <UserAvatarStyled src={avatar} alt="user avatar" />
          <Typography type="smallTextBold" color="black">
            {username}
          </Typography>
        </FlexWrapper>
      ))}
    </FlexWrapper>
  );
};

const RecipePhotoBlock = styled.div<{ photo: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 0.625rem 0.625rem 0.625rem;
  height: 9.375rem;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), #00000071),
    url(${({ photo }) => photo});
  background-size: cover;
`;

const UserAvatarStyled = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
`;
