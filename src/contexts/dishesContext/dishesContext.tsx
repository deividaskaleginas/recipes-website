import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { DishData } from "../../types/userDataTypes";

interface ContextProps {
  dishesData: DishData[];
  setDishes: Dispatch<SetStateAction<DishData[]>>;
}

const defaultState: ContextProps = {
  dishesData: [
    {
      id: "",
      date: "",
      authorData: [],
      comment: "",
      portions: "",
      ingridents: [],
      photo: "",
      procedure: [],
      time: "",
      title: "",
      votes: [],
    },
  ],
  //Quick fix
  setDishes: function (value: React.SetStateAction<DishData[]>): void {
    throw new Error("Function not implemented.");
  },
};

const DishesContext = createContext<ContextProps>(defaultState);

interface ProviderProps {
  children: ReactNode | ReactNode[];
}

const DishesProvider: React.FC<ProviderProps> = ({ children }) => {
  const [dishesData, setDishes] = useState<DishData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((response) => response.json())
      .then((dishesData: DishData[]) => setDishes(dishesData));
  }, []);

  return (
    <DishesContext.Provider value={{ dishesData, setDishes }}>
      {children}
    </DishesContext.Provider>
  );
};

export { DishesProvider };
export default DishesContext;
