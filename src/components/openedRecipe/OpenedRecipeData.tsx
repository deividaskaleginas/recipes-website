import { BookmarkButton } from "components/buttons/BookmarkButton";
import { CookingTime } from "components/cookingTime/CookingTime";
import { Typography } from "components/typography/Typography";
import { VotesAmount } from "components/votesAmount/VotesAmount";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import CommentsContext from "contexts/commentsContext/commentsContext";
import { useSaveToFavoritesRecipe } from "hooks/useSaveToFavoritesRecipe";
import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";
import { AuthorType } from "types/userDataTypes";
import DefaultAvatar from "../../assets/images/userAvatar.png";

interface OpenedRecipeDataProps {
  id: string;
  title: string;
  authorData: AuthorType;
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
    <OpenedRecipeSection>
      <RecipePhotoBlock photo={photo}>
        <FlexWrapper justifyContent="flex-end" gap="0.625rem">
          <CookingTime>{time}</CookingTime>
          <BookmarkButton isActive={isRecipeInFavorites} onClick={saveRecipe} />
        </FlexWrapper>
        <VotesAmount votes={votes} top="1.25rem" right="-0.625rem" />
      </RecipePhotoBlock>
      <RecipeTitleAndCommentsBlock>
        <Typography type="smallTextBold" color="black">
          {title}
        </Typography>
        <Typography type="smallTextRegular" color="gray3">
          ({filteredComments.length} Reviews)
        </Typography>
      </RecipeTitleAndCommentsBlock>
      <FlexWrapper margin="0.5rem 0 1rem" alignItems="center" gap="0.625rem">
        <UserAvatarStyled
          src={authorData.avatar || DefaultAvatar}
          alt="user avatar"
        />
        <Typography type="smallTextBold" color="black">
          {authorData.username}
        </Typography>
      </FlexWrapper>
    </OpenedRecipeSection>
  );
};

const OpenedRecipeSection = styled.section`
  max-width: 65rem;
`;

const RecipePhotoBlock = styled.div<{ photo: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 0 0.625rem 0.625rem 0.625rem;
  min-height: 9.375rem;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), #00000071),
    url(${({ photo }) => photo});
  background-size: cover;

  @media ${theme.device.tablet} {
    min-height: 29rem;
    max-width: 40rem;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

const RecipeTitleAndCommentsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
`;

const UserAvatarStyled = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  object-fit: cover;

  @media ${theme.device.tablet} {
    height: 3.5rem;
    width: 3.5rem;
  }
`;
