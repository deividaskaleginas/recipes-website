import React, { useContext } from "react";
import DishesContext from "../../contexts/dishesContext/dishesContext";
import { FlexWrapper } from "../wrappers/FlexWrapper";
import { SrollingDishesSectionCards } from "./scrollingDishesSectionCards/ScrollingDishesSectionCards";

export const ScrollingDishesSection: React.FC = () => {
  const { dishesData } = useContext(DishesContext);

  return (
    <FlexWrapper
      alignItems="flex-end"
      gap="0.9375rem"
      overflowX="scroll"
      width="100%"
      height="14.4375rem"
    >
      {dishesData.map(({ title, time, photo, id }) => (
        <SrollingDishesSectionCards
          key={id}
          title={title}
          time={time}
          image={photo}
          id={id}
        />
      ))}
    </FlexWrapper>
  );
};
