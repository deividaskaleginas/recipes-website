import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { CommentData } from "types/userDataTypes";

interface ContextProps {
  commentsData: CommentData[];
  setComments: Dispatch<SetStateAction<CommentData[]>>;
}

const defaultState: ContextProps = {
  commentsData: [
    {
      dishId: "",
      commentId: "",
      date: "",
      posterUsername: "",
      posterAvatar: "",
      comment: "",
    },
  ],
  setComments: function (value: React.SetStateAction<CommentData[]>): void {
    throw new Error("Function not implemented.");
  },
};

const CommentsContext = createContext<ContextProps>(defaultState);

interface ProviderProps {
  children: ReactNode | ReactNode[];
}

const CommentsProvider: React.FC<ProviderProps> = ({ children }) => {
  const [commentsData, setComments] = useState<CommentData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/comments")
      .then((response) => response.json())
      .then((commentsData: CommentData[]) => setComments(commentsData));
  }, []);

  return (
    <CommentsContext.Provider value={{ commentsData, setComments }}>
      {children}
    </CommentsContext.Provider>
  );
};

export { CommentsProvider };
export default CommentsContext;
