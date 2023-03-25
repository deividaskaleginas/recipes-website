import { LikeDislikeButton } from "components/buttons/LikeDislikeButton";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import CommentsContext from "contexts/commentsContext/commentsContext";
import UserContext from "contexts/userContext/userContext";
import { doc, updateDoc } from "firebase/firestore";
import React, { useContext } from "react";
import { Collections } from "types/collections";
import { Votes } from "types/userDataTypes";
import { dataBase } from "utils/firebase/firebaseConfig";

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
  const { commentsData, setComments } = useContext(CommentsContext);

  const filteredComment = commentsData.find((comment) => comment.id === id);

  const isLiked = likes.includes(loggedUserData.uid);
  const isDisLiked = dislikes.includes(loggedUserData.uid);

  const collectionRef = doc(dataBase, Collections.COMMENTS, id);

  const updateCommentCollectionDoc = async (newVotes: Votes[]) => {
    try {
      await updateDoc(collectionRef, { votes: newVotes });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = () => {
    if (isLiked) {
      let indexOf = likes.indexOf(loggedUserData.uid);
      likes.splice(indexOf, 1);
      const newVotes = [{ likes: likes, dislikes: dislikes }];
      updateCommentCollectionDoc(newVotes);
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
      setComments([...newData]);
    } else if (isDisLiked) {
      let indexOf = dislikes.indexOf(loggedUserData.uid);
      dislikes.splice(indexOf, 1);
      likes.push(loggedUserData.uid);
      const newVotes = [{ likes: likes, dislikes: dislikes }];
      updateCommentCollectionDoc(newVotes);
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
      setComments([...newData]);
    } else {
      likes.push(loggedUserData.uid);
      const newVotes = [{ likes: likes, dislikes: dislikes }];
      updateCommentCollectionDoc(newVotes);
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
      setComments([...newData]);
    }
  };

  const handleDisLike = () => {
    if (isDisLiked) {
      let indexOf = dislikes.indexOf(loggedUserData.uid);
      dislikes.splice(indexOf, 1);
      const newVotes = [{ likes: likes, dislikes: dislikes }];
      updateCommentCollectionDoc(newVotes);
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
      setComments([...newData]);
    } else if (isLiked) {
      let indexOf = likes.indexOf(loggedUserData.uid);
      likes.splice(indexOf, 1);
      dislikes.push(loggedUserData.uid);
      const newVotes = [{ likes: likes, dislikes: dislikes }];
      updateCommentCollectionDoc(newVotes);
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
      setComments([...newData]);
    } else {
      dislikes.push(loggedUserData.uid);
      const newVotes = [{ likes: likes, dislikes: dislikes }];
      updateCommentCollectionDoc(newVotes);
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
      setComments([...newData]);
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
