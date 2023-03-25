import React, {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import { collection, getDocs } from "firebase/firestore";
import { LoggedUserData } from "../../types/userDataTypes";
import { dataBase } from "utils/firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Collections } from "types/collections";

interface ContextProps {
  findUser: (uid: string) => void;
  createUser: (userName: string, userPassword: string, email: string) => void;
  loggedUserData: LoggedUserData;
  setLoggedUserData: Dispatch<SetStateAction<LoggedUserData>>;
  isUserLoggedIn: boolean;
}

const defaultState = {
  loggedUserData: {
    id: "",
    uid: "",
    username: "",
    avatar: "",
    favorites: [],
    votes: [],
  },
  findUser: (uid: string) => {},
  createUser(userName: string, userPassword: string, email: string) {},
  setLoggedUserData: (loggedUserData: LoggedUserData) => {},
  isUserLoggedIn: false,
} as ContextProps;

const UserContext = createContext<ContextProps>(defaultState);

interface ProviderProps {
  children: ReactNode | ReactNode[];
}

const UserProvider: React.FC<ProviderProps> = ({ children }) => {
  const [loggedUserData, setLoggedUserData] = useState<LoggedUserData>({
    id: "",
    uid: "",
    username: "",
    avatar: "",
    favorites: [],
    votes: [],
  });

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(Boolean);

  const navigate = useNavigate();

  const findUser = async (uid: string) => {
    const usersDb = (
      await getDocs(collection(dataBase, Collections.USERS))
    ).docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as unknown as LoggedUserData[];

    const filteredUser = usersDb.find(
      (user: LoggedUserData) => user.uid === uid
    ) as unknown as LoggedUserData;

    if (filteredUser) {
      setLoggedUserData(filteredUser);
      setIsUserLoggedIn(true);
      navigate("/");
    } else {
      setIsUserLoggedIn(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loggedUserData,
        setLoggedUserData,
        findUser,
        createUser(userName, userPassword, email) {},
        isUserLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
