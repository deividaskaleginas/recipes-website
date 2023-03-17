import React from "react";
import styled from "styled-components";
import { star } from "../../../assets/svg";
import { theme } from "../../../styles/theme";
import { BookmarkButton } from "../../buttons/BookmarkButton";
import { Typography } from "../../typography/Typography";
import { FlexWrapper } from "../../wrappers/FlexWrapper";
import { useSaveToFavoritesRecipe } from "../../../hooks/useSaveToFavoritesRecipe";
import { Link } from "react-router-dom";

interface SrollingDishesSectionCardsProps {
  id: string;
  image: string;
  title: string;
  time: string;
  rate?: string;
}

export const SrollingDishesSectionCards: React.FC<
  SrollingDishesSectionCardsProps
> = ({ title, time, image, id }) => {
  const { saveRecipe, isRecipeInFavorites } = useSaveToFavoritesRecipe(id);

  return (
    <FlexWrapper
      position="relative"
      flexDirection="column"
      justifyContent="space-between"
      minWidth="9.375rem"
      width="9.375rem"
      height="11rem"
      backgroundColor="gray4Opacity"
      borderRadius="0.75rem"
    >
      <ImageBlockStyled>
        <img src={image} alt={title} />
      </ImageBlockStyled>
      <RateingBlockStyled>
        {star}{" "}
        <Typography type="smallerTextRegular" color="black">
          4.5
        </Typography>
      </RateingBlockStyled>
      <FlexWrapper
        justifyContent="center"
        width="100%"
        padding="4.125rem 0.625rem 1.1875rem 0.625rem"
      >
        <Link to={`/recipe/${id}`}>
          <Typography
            type="smallTextBold"
            color="gray1"
            textAlign="center"
            numberOfLines={2}
          >
            {title}
          </Typography>
        </Link>
      </FlexWrapper>

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
    </FlexWrapper>
  );
};

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
`;

const RateingBlockStyled = styled.div`
  position: absolute;
  top: -7%;
  right: -14%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.1875rem 0.4375rem;
  background-color: ${theme.colors.secondary20};
  border-radius: 1.25rem;
`;
