import { FilterButton } from "components/buttons/FilterButton";
import DishesContext from "contexts/dishesContext/dishesContext";

import React, { useContext, useEffect, useState } from "react";

import { DishData } from "types/userDataTypes";

interface FiltersProps {
  setFilteredList: React.Dispatch<React.SetStateAction<DishData[] | null>>;
}
interface FilteringButton {
  name: string;
  value: string;
}

export const Filters: React.FC<FiltersProps> = ({ setFilteredList }) => {
  const { dishesData } = useContext(DishesContext);

  useEffect(() => {
    setFilteredList(getDishesData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buttons: FilteringButton[] = [
    { name: "All", value: "all" },
    { name: "Dinners", value: "Dinners" },
    { name: "Lunches", value: "Lunches" },
    { name: "Breakfast", value: "Breakfast" },
    { name: "Desserts", value: "Desserts" },
  ];

  const getDishesData = () => {
    const dishesList = dishesData;
    return dishesList;
  };

  const filterDishes = (dishCategory: any) => {
    let filteredDishes = getDishesData().filter((dish) =>
      dish.category.includes(dishCategory)
    );
    return filteredDishes;
  };

  const [active, setActive] = useState<FilteringButton>(buttons[0]);

  const handleCategory = (buttonData: FilteringButton) => {
    setActive(buttonData);

    buttonData.value !== "all"
      ? setFilteredList(filterDishes(buttonData.value))
      : setFilteredList(getDishesData());
  };

  return (
    <>
      {buttons.map((type, index) => (
        <FilterButton
          key={index}
          active={active.value === type.value}
          onClick={() => handleCategory(type)}
        >
          {type.name}
        </FilterButton>
      ))}
    </>
  );
};
