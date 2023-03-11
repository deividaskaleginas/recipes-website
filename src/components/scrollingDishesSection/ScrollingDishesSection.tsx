import React, { useContext } from "react";
import DishesContext from "../../contexts/dishesContext/dishesContext";
import { FlexWrapper } from "../wrappers/FlexWrapper";

export const ScrollingDishesSection: React.FC = () => {
  const { dishesData } = useContext(DishesContext);

  console.log(dishesData);

  return (
    <FlexWrapper>
      {/* {dishData.map((dish) => (
        <SrollingDishesSectionCards />
      ))} */}
    </FlexWrapper>
  );
};
