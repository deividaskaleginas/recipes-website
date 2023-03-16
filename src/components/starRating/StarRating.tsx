import { RatingStar } from "assets/svg";
import { CloseButton } from "components/buttons/moreInfoButtons/CloseButton";
import { RatingButton } from "components/buttons/RatingButton";
import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { useRateRecipe } from "hooks/useRateRecipe";
import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

interface StarRaitingProps {
  id: string;
  setIsRateing: React.Dispatch<React.SetStateAction<boolean>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StarRaiting: React.FC<StarRaitingProps> = ({
  id,
  setIsRateing,
  setModalOpen,
}) => {
  const [rating, setRating] = useState(0);
  const { voteRecipe, isRecipeVoted } = useRateRecipe(id, rating);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    voteRecipe();
    setIsRateing(false);
  };

  return (
    <StarRatingStyledBlock>
      <CloseButton onClick={() => setModalOpen(false)} />
      {isRecipeVoted ? (
        <FlexWrapper>
          <Typography type="smallTextRegular" color="label" textAlign="center">
            You have already voted!
          </Typography>
        </FlexWrapper>
      ) : (
        <>
          <FlexWrapper>
            <Typography type="smallTextRegular" color="label">
              Rate recipe
            </Typography>
          </FlexWrapper>
          <form onSubmit={handleSubmit}>
            <FlexWrapper gap="0.625rem">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                    />
                    <RatingStar
                      color={ratingValue <= rating ? "#FFAD30" : "white"}
                    />
                  </label>
                );
              })}
            </FlexWrapper>
            <FlexWrapper>
              <RatingButton
                color={rating > 0 ? "#FFAD30" : "#D9D9D9"}
                onClick={() => handleSubmit}
              />
            </FlexWrapper>
          </form>
        </>
      )}
    </StarRatingStyledBlock>
  );
};

const StarRatingStyledBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 10.625rem;
  gap: 0.3125rem;
  padding: 0.625rem 0.9375rem;
  border-radius: 0.5rem;
  background-color: ${theme.colors.white};

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3125rem;
  }

  input[type="radio"] {
    display: none;
  }
`;
