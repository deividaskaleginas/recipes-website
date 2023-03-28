import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import React from "react";
import { AuthorType } from "types/userDataTypes";
import styled from "styled-components";
import { CookingTime } from "components/cookingTime/CookingTime";
import { RatingStar } from "assets/svg";
import { Link } from "react-router-dom";
import DefaultAvatar from "../../../assets/images/userAvatar.png";
import { theme } from "styles/theme";

interface NewRecipesSectionCardsProps {
  id: string;
  photo: string;
  title: string;
  time: string;
  authorData: AuthorType;
  votes: number[];
}

export const NewRecipesSectionCards: React.FC<NewRecipesSectionCardsProps> = ({
  id,
  title,
  authorData,
  time,
  photo,
  votes,
}) => {
  const sum = votes.reduce((a, b) => a + b, 0);
  const rating = Math.round(sum / votes.length) || 0;

  return (
    <NewRecipeSectionCardBolck>
      <FlexWrapper width="8.75rem">
        <Link to={`/recipe/${id}`}>
          <Typography type="smallTextBold" color="gray1" numberOfLines={1}>
            {title}
            {/* {title.length > 17 ? title.substring(0, 17 - 3) + "..." : title} */}
          </Typography>
        </Link>
      </FlexWrapper>
      <FlexWrapper>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <FlexWrapper key={i}>
              <RatingStar color={ratingValue <= rating ? "#FFAD30" : "white"} />
            </FlexWrapper>
          );
        })}
      </FlexWrapper>
      <FlexWrapper justifyContent="space-between">
        <UserDataStyledBlock>
          <img src={authorData.avatar || DefaultAvatar} alt="user profile" />
          <Typography type="smallerTextRegular" color="gray3">
            By {authorData.username}
          </Typography>
        </UserDataStyledBlock>

        <CookingTime>{time}</CookingTime>
      </FlexWrapper>
      <RecipePhotoBlock>
        <img src={photo} alt={title} />
      </RecipePhotoBlock>
    </NewRecipeSectionCardBolck>
  );
};

const NewRecipeSectionCardBolck = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-width: 15.6875rem;
  height: 5.9375rem;
  padding: 0.625rem;
  border-radius: 0.625rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  -webkit-box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media ${theme.device.tablet} {
    min-width: 18.6875rem;
    height: 8.9375rem;
  }
  @media ${theme.device.laptop} {
    min-width: 17.6875rem;
    height: 8.9375rem;
  }
`;

const UserDataStyledBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  img {
    width: 1.5625rem;
    height: 1.5625rem;
    border: 50%;
  }
`;

const RecipePhotoBlock = styled.div`
  img {
    position: absolute;
    top: 0%;
    right: -10%;
    transform: translate(-50%, -50%);
    height: 5rem;
    width: 5rem;
    object-fit: cover;
    border-radius: 50%;
  }

  @media ${theme.device.tablet} {
    img {
      height: 7rem;
      width: 7rem;
    }
  }
`;
