import { collection, getDocs } from "firebase/firestore";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Collections } from "types/collections";
import { CommentData } from "types/userDataTypes";
import { dataBase } from "utils/firebase/firebaseConfig";

interface ContextProps {
  commentsData: CommentData[];
  setComments: Dispatch<SetStateAction<CommentData[]>>;
  getComments: () => Promise<void>;
}

const defaultState: ContextProps = {
  commentsData: [
    {
      dishId: "",
      id: "",
      date: "",
      authorData: {
        id: "",
        username: "",
        avatar: "",
      },
      comment: "",
      votes: [],
    },
  ],
  setComments: function (value: React.SetStateAction<CommentData[]>): void {
    throw new Error("Function not implemented.");
  },
  getComments: async () => {},
};

const CommentsContext = createContext<ContextProps>(defaultState);

interface ProviderProps {
  children: ReactNode | ReactNode[];
}

const CommentsProvider: React.FC<ProviderProps> = ({ children }) => {
  const [commentsData, setComments] = useState<CommentData[]>([]);
  const collectionRef = collection(dataBase, Collections.COMMENTS);

  console.log(commentsData);

  const getComments = async (): Promise<void> => {
    const commentsList = (await getDocs(collectionRef)).docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as unknown as CommentData[];

    if (commentsList) {
      setComments(commentsList);
    } else {
      console.log("do something with err");
    }
  };

  useEffect(() => {
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CommentsContext.Provider
      value={{ commentsData, setComments, getComments }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export { CommentsProvider };
export default CommentsContext;
