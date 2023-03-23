import { GoBackButton } from "components/buttons/GoBackButton";
import { Comment } from "components/comment/Comment";
import { LeaveComment } from "components/leaveComment/LeaveComment";
import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import CommentsContext from "contexts/commentsContext/commentsContext";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";

export const Comments: React.FC = () => {
  const { commentsData } = useContext(CommentsContext);
  const { id } = useParams() as {
    id: string;
  };

  const filteredComments = commentsData.filter(
    (comment) => comment.dishId === id
  );
  return (
    <FlexWrapper
      flexDirection="column"
      padding="0.875rem 1.875rem"
      gap="3.375rem"
    >
      <FlexWrapper alignItems="center" gap="6.25rem">
        <GoBackButton />
        <Typography type="mediumTextBold" color="black">
          Reviews
        </Typography>
      </FlexWrapper>
      <FlexWrapper flexDirection="column">
        <FlexWrapper justifyContent="flex-end">
          <Typography type="smallerTextRegular" color="gray3">
            {filteredComments.length} comments
          </Typography>
        </FlexWrapper>
        <FlexWrapper flexDirection="column" gap="2.75rem">
          <LeaveComment id={id} />
          <FlexWrapper flexDirection="column" gap="1.25rem">
            {filteredComments.map(
              ({ comment, authorData, date, votes, id }) => (
                <Comment
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
    </FlexWrapper>
  );
};
