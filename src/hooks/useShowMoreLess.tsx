import { useState } from "react";
import { DishData } from "types/userDataTypes";

interface UseShowMoreLess {
  showMore: () => void;
  showLess: () => void;
  itemsShowFrom: number;
  itemsShowTo: number;
}

export const useShowMoreLess = (
  list: DishData[] | null,
  setShowMoreButtonIsActive: React.Dispatch<React.SetStateAction<boolean>>,
  setShowLessButtonIsActive: React.Dispatch<React.SetStateAction<boolean>>
): UseShowMoreLess => {
  const [itemsShowFrom, setItemsShowFrom] = useState(0);
  const [itemsShowTo, setItemsShowTo] = useState(8);

  const showMore = () => {
    if (itemsShowTo + 8 < list!.length) {
      setItemsShowFrom(itemsShowFrom + 8);
      setItemsShowTo(itemsShowTo + 8);
      setShowLessButtonIsActive(true);
    } else if (itemsShowTo + 8 === list!.length) {
      setItemsShowFrom(itemsShowFrom + 8);
      setItemsShowTo(itemsShowTo + 8);
      setShowMoreButtonIsActive(false);
      setShowLessButtonIsActive(true);
    } else if (itemsShowTo + 8 > list!.length && list!.length > itemsShowTo) {
      setItemsShowFrom(itemsShowTo);
      setItemsShowTo(list!.length);
      setShowMoreButtonIsActive(false);
      setShowLessButtonIsActive(true);
    }
  };

  const showLess = () => {
    if (itemsShowTo === list!.length) {
      setItemsShowTo(list!.length - (list!.length - itemsShowFrom));
      setItemsShowFrom(list!.length - (list!.length - itemsShowFrom) - 8);
      if (list!.length - (list!.length - itemsShowFrom) - 8 === 0) {
        setShowLessButtonIsActive(false);
        setShowMoreButtonIsActive(true);
      }
    } else if (itemsShowFrom - 8 > 0) {
      setItemsShowFrom(itemsShowFrom - 8);
      setItemsShowTo(itemsShowTo - 8);
      setShowLessButtonIsActive(true);
    } else if (itemsShowFrom - 8 < 0 || itemsShowFrom - 8 === 0) {
      setItemsShowFrom(0);
      setItemsShowTo(8);
      setShowLessButtonIsActive(false);
      setShowMoreButtonIsActive(true);
    }
  };

  return {
    showMore,
    showLess,
    itemsShowFrom,
    itemsShowTo,
  };
};
