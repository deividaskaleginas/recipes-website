import { LikeDislike } from "components/likeDislike/LikeDislike";
import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import React from "react";
import styled from "styled-components";
import { theme } from "styles/theme";
import { AuthorType, Votes } from "types/userDataTypes";

import DefaultAvatar from "../../assets/images/userAvatar.png";

interface CommentProps {
  comment: string;
  id: string;
  authorData: AuthorType;
  date: string;
  votes: Votes[];
}

export const Comment: React.FC<CommentProps> = ({
  comment,
  id,
  authorData,
  date,
  votes,
}) => (
  <CommentBlockStyled>
    <FlexWrapper gap="0.5625rem" alignItems="center">
      <FlexWrapper>
        <img src={authorData.avatar || DefaultAvatar} alt="" />
      </FlexWrapper>
      <UsernameDateBlock>
        <Typography type="smallerTextBold" color="label">
          {authorData.username}
        </Typography>
        <Typography type="smallerTextRegular" color="gray3">
          {date}
        </Typography>
      </UsernameDateBlock>
    </FlexWrapper>

    <CommentDataBlock>
      <Typography type="smallerTextRegular" color="gray1">
        {comment}
      </Typography>

      {votes.map(({ likes, dislikes }, index) => (
        <LikeDislike key={index} likes={likes} dislikes={dislikes} id={id} />
      ))}
    </CommentDataBlock>
  </CommentBlockStyled>
);

const CommentBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  img {
    max-width: 1.9375rem;
    max-height: 1.9375rem;
    object-fit: cover;
    border-radius: 50%;
  }
  @media ${theme.device.tablet} {
    gap: 1rem;

    img {
      max-height: 3rem;
      max-width: 3rem;
    }
  }
`;

const UsernameDateBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media ${theme.device.tablet} {
    gap: 0.5rem;
  } ;
`;

const CommentDataBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${theme.device.tablet} {
    padding-left: 3.625rem;
  }
`;
