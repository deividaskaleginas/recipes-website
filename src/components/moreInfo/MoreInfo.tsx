import { CloseButton } from "components/buttons/moreInfoButtons/CloseButton";
import { RateRecipeButton } from "components/buttons/moreInfoButtons/RateRecipeButton";
import { ReviewButton } from "components/buttons/moreInfoButtons/ReviewButton";
import { SaveUnsaveButton } from "components/buttons/moreInfoButtons/SaveUnsaveButton";
import { useSaveToFavoritesRecipe } from "hooks/useSaveToFavoritesRecipe";
import React from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

interface MoreInfoProps {
  id: string;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRateing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MoreInfo: React.FC<MoreInfoProps> = ({
  id,
  setModalOpen,
  setIsRateing,
}) => {
  const { saveRecipe, isRecipeInFavorites } = useSaveToFavoritesRecipe(id);
  return (
    <MoreInfoStyledBlock>
      <CloseButton onClick={() => setModalOpen(false)} />
      <RateRecipeButton onClick={() => setIsRateing(true)} />
      <ReviewButton onClick={() => setModalOpen(false)} id={id} />
      <SaveUnsaveButton isActive={isRecipeInFavorites} onClick={saveRecipe} />
    </MoreInfoStyledBlock>
  );
};

const MoreInfoStyledBlock = styled.div`
  position: absolute;
  right: 1.875rem;
  top: 4.4375rem;
  display: flex;
  width: fit-content;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 1.9rem;
  gap: 0.9375rem;
  background: ${theme.colors.white};

  p {
    font-size: 1.2rem;
  }

  @media ${theme.device.tablet} {
    padding: 3rem;
  }
`;
