import React, {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { LoggedUserData, UserData } from "../../types/userDataTypes";

interface ContextProps {
  findUser: (userName: string, userPassword: string) => void;
  loggedUserData: LoggedUserData;
  setLoggedUserData: Dispatch<SetStateAction<LoggedUserData>>;
  userLoggedIn: boolean;
}

const defaultState = {
  loggedUserData: {
    id: "",
    username: "",
    avatar: "",
    favorites: [],
    votes: [],
  },
  findUser: (usernaeme: string, userPassword: string) => {},
  setLoggedUserData: (loggedUserData: LoggedUserData) => {},
  userLoggedIn: false,
} as ContextProps;

const UserContext = createContext<ContextProps>(defaultState);

interface ProviderProps {
  children: ReactNode | ReactNode[];
}

const UserProvider: React.FC<ProviderProps> = ({ children }) => {
  const [loggedUserData, setLoggedUserData] = useState<LoggedUserData>({
    id: "",
    username: "",
    avatar: "",
    favorites: [],
    votes: [],
  });

  const [userLoggedIn, setUserLoggedIn] = useState(Boolean);

  const findUser = (userName: string, userPassword: string) => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((usersList: UserData[]) => {
        const loggedInUser = usersList.find(
          (user: UserData) =>
            user.username === userName && user.password === userPassword
        );

        if (loggedInUser) {
          setUserLoggedIn(true);
          setLoggedUserData({
            username: loggedInUser.username,
            avatar: loggedInUser.avatar,
            id: loggedInUser.id,
            favorites: loggedInUser.favorites,
            votes: loggedInUser.votes,
          });
        } else {
          setUserLoggedIn(false);
        }
      });
  };

  return (
    <UserContext.Provider
      value={{
        loggedUserData,
        setLoggedUserData,
        findUser,
        userLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
