import React from "react";
import styled from "styled-components";
import { star } from "../../../assets/svg";
import { theme } from "../../../styles/theme";
import { BookmarkButton } from "../../buttons/BookmarkButton";
import { Typography } from "../../typography/Typography";
import { FlexWrapper } from "../../wrappers/FlexWrapper";
import { useSaveToFavoritesRecipe } from "../../../hooks/useSaveToFavoritesRecipe";
import { Link } from "react-router-dom";
import { VotesAmount } from "components/votesAmount/VotesAmount";

interface SrollingDishesSectionCardsProps {
  id: string;
  image: string;
  title: string;
  time: string;
  votes: number[];
}

export const SrollingDishesSectionCards: React.FC<
  SrollingDishesSectionCardsProps
> = ({ title, time, image, id, votes }) => {
  const { saveRecipe, isRecipeInFavorites } = useSaveToFavoritesRecipe(id);

  return (
    <ScrollingDishSectionCardStyled>
      <ImageBlockStyled>
        <img src={image} alt={title} />
      </ImageBlockStyled>
      <VotesAmount votes={votes} top="-7%" right="-14%" />
      <Link to={`/recipe/${id}`}>
        <FlexWrapper
          justifyContent="center"
          width="100%"
          padding="4.125rem 0.625rem 1.1875rem 0.625rem"
        >
          <Typography
            type="smallTextBold"
            color="gray1"
            textAlign="center"
            numberOfLines={2}
          >
            {title}
          </Typography>
        </FlexWrapper>
      </Link>

      <FlexWrapper
        justifyContent="space-between"
        alignItems="flex-end"
        padding="0 0.625rem 0.625rem 0.625rem"
      >
        <FlexWrapper flexDirection="column" gap="0.3125rem">
          <Typography type="smallerTextRegular" color="gray3">
            Time
          </Typography>
          <Typography type="smallerTextBold" color="gray1">
            {time} Mins
          </Typography>
        </FlexWrapper>
        <FlexWrapper>
          <BookmarkButton isActive={isRecipeInFavorites} onClick={saveRecipe} />
        </FlexWrapper>
      </FlexWrapper>
    </ScrollingDishSectionCardStyled>
  );
};

const ScrollingDishSectionCardStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 9.375rem;
  width: 9.375rem;
  height: 11rem;
  background-color: ${theme.colors.gray4Opacity};
  border-radius: 0.75rem;

  @media ${theme.device.tablet} {
    width: 14rem;
    height: 14rem;
  }
`;

const ImageBlockStyled = styled.div`
  img {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 6.875rem;
    width: 6.875rem;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    -moz-box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    -webkit-box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  @media ${theme.device.tablet} {
    img {
      height: 9.875rem;
      width: 9.875rem;
    }
  }
`;
