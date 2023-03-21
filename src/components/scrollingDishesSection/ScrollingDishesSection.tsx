import React, { useState } from "react";
import styled from "styled-components";
import { DishData } from "types/userDataTypes";

import { FlexWrapper } from "../wrappers/FlexWrapper";
import { Filters } from "./filters/Filters";
import { SrollingDishesSectionCards } from "./scrollingDishesSectionCards/ScrollingDishesSectionCards";

export const ScrollingDishesSection: React.FC = () => {
  const [filteredList, setFilteredList] = useState<DishData[] | null>(null);
  return (
    <FlexWrapper flexDirection="column">
      <FilterScrollBar>
        <Filters setFilteredList={setFilteredList} />
      </FilterScrollBar>
      <FilteredListScrollBar>
        {filteredList &&
          filteredList!.map(({ title, time, photo, id, votes }) => (
            <SrollingDishesSectionCards
              key={id}
              title={title}
              time={time}
              image={photo}
              id={id}
              votes={votes}
            />
          ))}
      </FilteredListScrollBar>
    </FlexWrapper>
  );
};

const FilterScrollBar = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 1.5625rem 0;
  overflow-x: scroll;
  width: 100%;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const FilteredListScrollBar = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.9375rem;
  height: 14.4375rem;
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;
