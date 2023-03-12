import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import React from "react";
import { AuthorType } from "types/userDataTypes";
import { timer } from "assets/svg";
import styled from "styled-components";

interface NewRecipesSectionCardsProps {
  id: string;
  photo: string;
  title: string;
  time: string;
  authorData: AuthorType[];
  votes?: string[];
}

export const NewRecipesSectionCards: React.FC<NewRecipesSectionCardsProps> = ({
  title,
  authorData,
  time,
  photo,
}) => {
  return (
    <FlexWrapper
      position="relative"
      flexDirection="column"
      justifyContent="space-around"
      minWidth="15.6875rem"
      height="5.9375rem"
      padding="0.625rem"
      borderRadius="0.625rem"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      webkitBoxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    >
      <FlexWrapper>
        <Typography type="smallTextBold" color="gray1">
          {title}
        </Typography>
      </FlexWrapper>
      <FlexWrapper>Starsai</FlexWrapper>
      <FlexWrapper justifyContent="space-between">
        {authorData.map(({ avatar, username }) => (
          <UserDataStyledBlock>
            <img src={avatar} alt="user profile" />
            <Typography type="smallerTextRegular" color="gray3">
              By {username}
            </Typography>
          </UserDataStyledBlock>
        ))}
        <FlexWrapper alignItems="center" gap="0.3125rem">
          {timer}{" "}
          <Typography type="smallerTextRegular" color="gray3">
            {time} mins
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
      <RecipePhotoBlock>
        <img src={photo} alt={title} />
      </RecipePhotoBlock>
    </FlexWrapper>
  );
};

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
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
