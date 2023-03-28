import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import DishesContext from "contexts/dishesContext/dishesContext";
import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";
import { NewRecipesSectionCards } from "./newRecipesSectionCards/NewRecipesSectionCards";

export const NewRecipesSection: React.FC = () => {
  const { dishesData } = useContext(DishesContext);
  return (
    <FlexWrapper flexDirection="column" padding="3.25rem 0">
      <FlexWrapper flexDirection="column">
        <Typography type="normalTextBold">New Recipes</Typography>
      </FlexWrapper>
      <NewRecipesListScrollBar>
        {dishesData
          .slice(0, 4)
          .map(({ id, title, photo, time, authorData, votes }) => (
            <NewRecipesSectionCards
              key={id}
              id={id}
              title={title}
              photo={photo}
              time={time}
              authorData={authorData}
              votes={votes}
            />
          ))}
      </NewRecipesListScrollBar>
    </FlexWrapper>
  );
};

const NewRecipesListScrollBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;
  height: 10.9375rem;
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media ${theme.device.tablet} {
    height: 16.9375rem;
  }

  @media ${theme.device.laptop} {
    justify-content: center;
  }
`;
