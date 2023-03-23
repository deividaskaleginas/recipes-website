import { LikeDislikeButton } from "components/buttons/LikeDislikeButton";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import CommentsContext from "contexts/commentsContext/commentsContext";
import UserContext from "contexts/userContext/userContext";
import React, { useContext } from "react";

interface LikesDislikeProps {
  likes: string[];
  dislikes: string[];
  id: string;
}

export const LikeDislike: React.FC<LikesDislikeProps> = ({
  likes,
  dislikes,
  id,
}) => {
  const { loggedUserData } = useContext(UserContext);
  const { commentsData, setComment } = useContext(CommentsContext);

  const filteredComment = commentsData.find((comment) => comment.id === id);

  const isLiked = likes.includes(loggedUserData.id);
  const isDisLiked = dislikes.includes(loggedUserData.id);

  console.log(filteredComment);

  const handleLike = () => {
    if (isLiked) {
      let indexOf = likes.indexOf(loggedUserData.id);
      likes.splice(indexOf, 1);
      const newVotes = [{ likes: likes, dislikes: dislikes }];
      fetch(`http://localhost:3001/comments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          votes: newVotes,
        }),
      });
      const newData = commentsData.map((comment) =>
        comment.id === id
          ? {
              dishId: filteredComment!.dishId,
              id: filteredComment!.id,
              date: filteredComment!.date,
              authorData: filteredComment!.authorData,
              comment: filteredComment!.comment,
              votes: newVotes,
            }
          : comment
      );
      setComment([...newData]);
    } else if (isDisLiked) {
      let indexOf = dislikes.indexOf(loggedUserData.id);
      dislikes.splice(indexOf, 1);
      likes.push(loggedUserData.id);
      const newVotes = [{ likes: likes, dislikes: dislikes }];
      fetch(`http://localhost:3001/comments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          votes: newVotes,
        }),
      });
      const newData = commentsData.map((comment) =>
        comment.id === id
          ? {
              dishId: filteredComment!.dishId,
              id: filteredComment!.id,
              date: filteredComment!.date,
              authorData: filteredComment!.authorData,
              comment: filteredComment!.comment,
              votes: newVotes,
            }
          : comment
      );
      setComment([...newData]);
    } else {
      likes.push(loggedUserData.id);
      const newVotes = [{ likes: likes, dislikes: dislikes }];
      fetch(`http://localhost:3001/comments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          votes: newVotes,
        }),
      });
      const newData = commentsData.map((comment) =>
        comment.id === id
          ? {
              dishId: filteredComment!.dishId,
              id: filteredComment!.id,
              date: filteredComment!.date,
              authorData: filteredComment!.authorData,
              comment: filteredComment!.comment,
              votes: newVotes,
            }
          : comment
      );
      setComment([...newData]);
    }
  };

  const handleDisLike = () => {
    if (isDisLiked) {
      let indexOf = dislikes.indexOf(loggedUserData.id);
      dislikes.splice(indexOf, 1);
      const newVotes = [{ likes: likes, dislikes: dislikes }];
      fetch(`http://localhost:3001/comments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          votes: newVotes,
        }),
      });
      const newData = commentsData.map((comment) =>
        comment.id === id
          ? {
              dishId: filteredComment!.dishId,
              id: filteredComment!.id,
              date: filteredComment!.date,
              authorData: filteredComment!.authorData,
              comment: filteredComment!.comment,
              votes: newVotes,
            }
          : comment
      );
      setComment([...newData]);
    } else if (isLiked) {
      let indexOf = likes.indexOf(loggedUserData.id);
      likes.splice(indexOf, 1);
      dislikes.push(loggedUserData.id);
      const newVotes = [{ likes: likes, dislikes: dislikes }];
      fetch(`http://localhost:3001/comments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          votes: newVotes,
        }),
      });
      const newData = commentsData.map((comment) =>
        comment.id === id
          ? {
              dishId: filteredComment!.dishId,
              id: filteredComment!.id,
              date: filteredComment!.date,
              authorData: filteredComment!.authorData,
              comment: filteredComment!.comment,
              votes: newVotes,
            }
          : comment
      );
      setComment([...newData]);
    } else {
      dislikes.push(loggedUserData.id);
      const newVotes = [{ likes: likes, dislikes: dislikes }];
      fetch(`http://localhost:3001/comments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          votes: newVotes,
        }),
      });
      const newData = commentsData.map((comment) =>
        comment.id === id
          ? {
              dishId: filteredComment!.dishId,
              id: filteredComment!.id,
              date: filteredComment!.date,
              authorData: filteredComment!.authorData,
              comment: filteredComment!.comment,
              votes: newVotes,
            }
          : comment
      );
      setComment([...newData]);
    }
  };

  return (
    <FlexWrapper gap="0.3125rem">
      <LikeDislikeButton
        onClick={() => handleLike()}
        isActive={isLiked ? true : false}
        like={true}
      >
        {likes.length}
      </LikeDislikeButton>
      <LikeDislikeButton
        isActive={isDisLiked ? true : false}
        like={false}
        onClick={() => handleDisLike()}
      >
        {dislikes.length}
      </LikeDislikeButton>
    </FlexWrapper>
  );
};
