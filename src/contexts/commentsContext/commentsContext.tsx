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
  setComment: Dispatch<SetStateAction<CommentData[]>>;
}

const defaultState: ContextProps = {
  commentsData: [
    {
      dishId: "",
      id: "",
      date: "",
      authorData: [],
      comment: "",
      votes: [],
    },
  ],
  setComment: function (value: React.SetStateAction<CommentData[]>): void {
    throw new Error("Function not implemented.");
  },
};

const CommentsContext = createContext<ContextProps>(defaultState);

interface ProviderProps {
  children: ReactNode | ReactNode[];
}

const CommentsProvider: React.FC<ProviderProps> = ({ children }) => {
  const [commentsData, setComment] = useState<CommentData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/comments")
      .then((response) => response.json())
      .then((commentsData: CommentData[]) => setComment(commentsData));
  }, []);

  return (
    <CommentsContext.Provider value={{ commentsData, setComment }}>
      {children}
    </CommentsContext.Provider>
  );
};

export { CommentsProvider };
export default CommentsContext;
