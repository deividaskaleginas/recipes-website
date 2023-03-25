import { Servings } from "components/servings/Servings";
import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import React from "react";
import { IngredientType } from "types/userDataTypes";

interface IngredientsProps {
  ingredients: IngredientType[];
  portions: string;
}

export const Ingredients: React.FC<IngredientsProps> = ({
  ingredients,
  portions,
}) => {
  console.log(ingredients);
  return (
    <FlexWrapper flexDirection="column" gap="0.625rem">
      <FlexWrapper justifyContent="space-between">
        <Servings portions={portions} />
        <Typography type="smallerTextRegular" color="gray3">
          {ingredients.length} {ingredients.length > 1 ? "Items" : "Item"}
        </Typography>
      </FlexWrapper>
      {ingredients.map(({ ingredient, amount, measure }, index) => (
        <FlexWrapper
          key={index}
          padding="1.25rem 0.9375rem"
          backgroundColor="gray4"
          borderRadius="0.75rem"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <FlexWrapper>
            <Typography type="normalTextBold" color="black">
              {ingredient}
            </Typography>
          </FlexWrapper>
          <FlexWrapper>
            <Typography type="smallTextRegular" color="gray3">
              {amount}
              {measure}
            </Typography>
          </FlexWrapper>
        </FlexWrapper>
      ))}
    </FlexWrapper>
  );
};
