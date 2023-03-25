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
import { dataBase } from "utils/firebase/firebaseConfig";

import { DishData } from "../../types/userDataTypes";

interface ContextProps {
  dishesData: DishData[];
  setDishes: Dispatch<SetStateAction<DishData[]>>;
  getRecipesCollection: () => Promise<void>;
}

const defaultState: ContextProps = {
  dishesData: [
    {
      id: "",
      date: "",
      authorData: {
        id: "",
        avatar: "",
        username: "",
      },
      comment: "",
      portions: "",
      ingridents: [],
      photo: "",
      procedure: [],
      time: "",
      title: "",
      votes: [],
      category: [],
    },
  ],
  //Quick fix
  setDishes: function (value: React.SetStateAction<DishData[]>): void {
    throw new Error("Function not implemented.");
  },
  getRecipesCollection: async () => {},
};

const DishesContext = createContext<ContextProps>(defaultState);

interface ProviderProps {
  children: ReactNode | ReactNode[];
}

const DishesProvider: React.FC<ProviderProps> = ({ children }) => {
  const [dishesData, setDishes] = useState<DishData[]>([]);

  const collectionRef = collection(dataBase, Collections.RECIPES);

  const getRecipesCollection = async (): Promise<void> => {
    const recipesList = (await (
      await getDocs(collectionRef)
    ).docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))) as unknown as DishData[];

    if (recipesList) {
      setDishes(recipesList);
    } else {
      console.log("Do something on error");
    }
  };

  useEffect(() => {
    getRecipesCollection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DishesContext.Provider
      value={{ dishesData, setDishes, getRecipesCollection }}
    >
      {children}
    </DishesContext.Provider>
  );
};

export { DishesProvider };
export default DishesContext;
