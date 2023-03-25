import { LikeDislike } from "components/likeDislike/LikeDislike";
import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import React from "react";
import styled from "styled-components";
import { AuthorType, Votes } from "types/userDataTypes";

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
}) => {
  console.log(votes);
  return (
    <CommentBlockStyled>
      <FlexWrapper gap="0.5625rem">
        <FlexWrapper>
          <img src={authorData.avatar} alt="" />
        </FlexWrapper>
        <FlexWrapper flexDirection="column">
          <Typography type="smallerTextBold" color="label">
            {authorData.username}
          </Typography>
          <Typography type="smallerTextRegular" color="gray3">
            {date}
          </Typography>
        </FlexWrapper>
      </FlexWrapper>

      <FlexWrapper>
        <Typography type="smallerTextRegular" color="gray1">
          {comment}
        </Typography>
      </FlexWrapper>
      {votes.map(({ likes, dislikes }, index) => (
        <LikeDislike key={index} likes={likes} dislikes={dislikes} id={id} />
      ))}
    </CommentBlockStyled>
  );
};

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
`;
