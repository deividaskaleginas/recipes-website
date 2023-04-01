import React, { useEffect, useState } from "react";
import { useShowMoreLess } from "hooks/useShowMoreLess";
import { DishData } from "types/userDataTypes";
import { CaretButton } from "components/buttons/CaretButton";
import { Typography } from "components/typography/Typography";
import styled from "styled-components";

interface ShowMoreLessProps {
  dishesArray: DishData[] | null;
  setItemsShowFrom: React.Dispatch<React.SetStateAction<number>>;
  setItemsShowTo: React.Dispatch<React.SetStateAction<number>>;
}

export const ShowMoreLess: React.FC<ShowMoreLessProps> = ({
  dishesArray,
  setItemsShowFrom,
  setItemsShowTo,
}) => {
  const [showMoreButtonIsActive, setShowMoreButtonIsActive] = useState(true);
  const [showLessButtonIsActive, setShowLessButtonIsActive] = useState(false);
  const { itemsShowFrom, itemsShowTo, showLess, showMore } = useShowMoreLess(
    dishesArray,
    setShowMoreButtonIsActive,
    setShowLessButtonIsActive
  );

  useEffect(() => {
    setItemsShowFrom(itemsShowFrom);
    setItemsShowTo(itemsShowTo);
  }, [itemsShowFrom, itemsShowTo]);

  return (
    <ShowMoreLessBlock>
      {showLessButtonIsActive && <CaretButton onClick={() => showLess()} />}
      <Typography type="smallerTextRegular">
        {itemsShowFrom + 1} - {itemsShowTo}
      </Typography>
      {showMoreButtonIsActive && (
        <CaretButton onClick={() => showMore()} isRight={true} />
      )}
    </ShowMoreLessBlock>
  );
};

const ShowMoreLessBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem;
`;
