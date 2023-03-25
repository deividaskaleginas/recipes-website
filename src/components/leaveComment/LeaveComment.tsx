import { SendCommentButton } from "components/buttons/SendCommentButton";
import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import CommentsContext from "contexts/commentsContext/commentsContext";
import UserContext from "contexts/userContext/userContext";
import React, { FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";
import uniqid from "uniqid";

interface LeaveCommentProps {
  id: string;
}

export const LeaveComment: React.FC<LeaveCommentProps> = ({ id }) => {
  const { commentsData, setComment } = useContext(CommentsContext);
  const { loggedUserData } = useContext(UserContext);

  const [values, setValues] = useState({
    comment: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const createComment = () => {
    const commentData = {
      dishId: id,
      id: uniqid(),
      date: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""),
      authorData: [
        {
          avatar: loggedUserData.avatar,
          username: loggedUserData.username,
          id: loggedUserData.uid,
        },
      ],
      comment: values.comment,
      votes: [
        {
          likes: [],
          dislikes: [],
        },
      ],
    };

    setComment([...commentsData, commentData]);
    fetch("http://localhost:3001/comments", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createComment();
  };

  return (
    <FlexWrapper flexDirection="column" gap="0.3125rem">
      <Typography type="smallTextRegular" color="label">
        Leave a comment
      </Typography>
      <Form onSubmit={handleSubmit}>
        <TextareaStyled
          name="comment"
          placeholder="Say something..."
          value={values.comment}
          onChange={onChange}
        />
        <SendCommentButton />
      </Form>
    </FlexWrapper>
  );
};

const Form = styled.form`
  position: relative;
  width: 100%;
`;

const TextareaStyled = styled.textarea`
  min-height: 3.375rem;
  width: 100%;
  border: 0.0938rem solid ${() => theme.colors.gray4};
  border-radius: 0.625rem;
  color: ${() => theme.colors.label};
  padding: 1rem 4.5rem 1rem 1rem;

  resize: none;
`;
