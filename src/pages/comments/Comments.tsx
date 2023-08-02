import { GoBackButton } from "components/buttons/GoBackButton";
import { Comment } from "components/comment/Comment";
import { LeaveComment } from "components/leaveComment/LeaveComment";
import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import CommentsContext from "contexts/commentsContext/commentsContext";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const Comments: React.FC = () => {
  const { commentsData } = useContext(CommentsContext);
  const { id } = useParams() as {
    id: string;
  };

  const filteredComments = commentsData.filter(
    (comment) => comment.dishId === id
  );
  return (
    <CommentSection>
      <FlexWrapper alignItems="center" gap="40%">
        <GoBackButton />
        <Typography type="mediumTextBold" color="black">
          Reviews
        </Typography>
      </FlexWrapper>
      <FlexWrapper flexDirection="column">
        <FlexWrapper justifyContent="flex-end" padding="0 0 1rem 0">
          <Typography type="smallerTextRegular" color="gray3">
            {filteredComments.length} comments
          </Typography>
        </FlexWrapper>
        <FlexWrapper flexDirection="column" gap="2.75rem">
          <LeaveComment id={id} />
          <FlexWrapper flexDirection="column" gap="1.25rem">
            {filteredComments.map(
              ({ comment, authorData, date, votes, id }, index) => (
                <Comment
                  key={index}
                  comment={comment}
                  authorData={authorData}
                  date={date}
                  votes={votes}
                  id={id}
                />
              )
            )}
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </CommentSection>
  );
};

const CommentSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.875rem 1.875rem;
  gap: 3.375rem;

  max-width: 75rem;
  margin: 0 auto;
`;
