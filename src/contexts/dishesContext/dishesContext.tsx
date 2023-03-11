import React, { createContext, ReactNode, useEffect, useState } from "react";

import { DishData } from "../../types/userDataTypes";

interface ContextProps {
  dishesData: DishData[];
}

const defaultState: ContextProps = {
  dishesData: [
    {
      id: "",
      comment: "",
      ingridents: [],
      photo: "",
      procedure: [],
      time: "",
      title: "",
    },
  ],
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
    <DishesContext.Provider value={{ dishesData }}>
      {children}
    </DishesContext.Provider>
  );
};

export { DishesProvider };
export default DishesContext;
