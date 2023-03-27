import DishesContext from "contexts/dishesContext/dishesContext";
import UserContext from "contexts/userContext/userContext";
import { addDoc, collection } from "firebase/firestore";
import React, { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Collections } from "types/collections";
import { RouteNames } from "types/routes";

import { auth, dataBase } from "utils/firebase/firebaseConfig";
import { ArrowButton } from "../../components/buttons/ArrowButton";
import { TextButton } from "../../components/buttons/TextButton";
import { FormInputs } from "../../components/formInputs/FormInputs";
import { Typography } from "../../components/typography/Typography";
import { FlexWrapper } from "../../components/wrappers/FlexWrapper";
import { GridWrapper } from "../../components/wrappers/GridWrapper";
import { theme } from "../../styles/theme";
import {
  DishData,
  IngredientType,
  ProcedureType,
} from "../../types/userDataTypes";
import { Categories } from "./categories/Categories";

export const AddRecipe: React.FC = () => {
  const { getRecipesCollection } = useContext(DishesContext);
  const { loggedUserData } = useContext(UserContext);

  const [values, setValues] = useState({
    photo: "",
    title: "",
    time: "",
    comment: "",
    portions: "",
  });

  const inputs: {
    id: number;
    name: keyof typeof values;
    type: string;
    placeholder: string;
    label: string;
    required?: boolean;
  }[] = [
    {
      id: 1,
      name: "photo",
      type: "url",
      placeholder: "Photo",
      label: "Photo",
      required: true,
    },
    {
      id: 2,
      name: "title",
      type: "text",
      placeholder: "Recipe title",
      label: "Recipe title",
      required: true,
    },

    {
      id: 3,
      name: "time",
      type: "text",
      placeholder: "Time",
      label: "Time",
      required: true,
    },
    {
      id: 4,
      name: "comment",
      type: "textarea",
      placeholder: "Comment",
      label: "Comment",
    },
    {
      id: 5,
      name: "portions",
      type: "string",
      placeholder: "Servings",
      label: "Servings",
    },
  ];

  const options: {
    measure: string;
  }[] = [
    { measure: "Select" },
    { measure: "pc." },
    { measure: "kg." },
    { measure: "g." },
    { measure: "l." },
  ];

  const categoriesOptions = ["Dinners", "Lunches", "Breakfast", "Desserts"];

  const [categoriesList, setCategoriesList] = useState<string[]>([]);

  const navigate = useNavigate();

  const [ingredientList, setIngredientList] = useState<IngredientType[]>([
    {
      ingredient: "",
      amount: "",
      measure: "",
    },
  ]);

  const [procedureList, setProcedureList] = useState<ProcedureType[]>([
    {
      step: "",
    },
  ]);

  const handleAddProcedureFields = () => {
    setProcedureList([
      ...procedureList,
      {
        step: "",
      },
    ]);
  };

  const handleRemoveProcedureFields = (index: number) => {
    const values = [...procedureList];
    values.splice(index, 1);
    setProcedureList(values);
  };

  const handleAddIngridentFields = () => {
    setIngredientList([
      ...ingredientList,
      {
        ingredient: "",
        amount: "",
      },
    ]);
  };

  const handleRemoveIngredientFields = (index: number) => {
    const values = [...ingredientList];
    values.splice(index, 1);
    setIngredientList(values);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleChangeIngredientInput = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let values: IngredientType[] = [...ingredientList];
    const keyInIngredients = event.target
      .name as unknown as keyof IngredientType;

    values[index][keyInIngredients] = event.target.value;
    setIngredientList(values);
  };

  const handleChangeProcedureInput = (
    index: number,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    let values: ProcedureType[] = [...procedureList];
    const keyInProcedures = event.target.name as unknown as keyof ProcedureType;

    values[index][keyInProcedures] = event.target.value;
    setProcedureList(values);
  };

  const currentUserUid = auth.currentUser?.uid;

  const collectionRef = collection(dataBase, Collections.RECIPES);

  const createRecipe = async () => {
    const recipeData: Omit<DishData, "id"> = {
      date: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""),
      authorData: {
        avatar: loggedUserData.avatar,
        id: currentUserUid || "unknown",
        username: loggedUserData.username,
      },
      photo: values.photo,
      title: values.title,
      time: values.time,
      comment: values.comment,
      portions: values.portions,
      ingridents: ingredientList,
      procedure: procedureList,
      category: categoriesList,
      votes: [],
    };

    try {
      addDoc(collectionRef, recipeData);
      getRecipesCollection();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createRecipe();
    navigate(RouteNames.HOME);
  };

  return (
    <AddRecipeSectionBlock>
      <FlexWrapper
        flexDirection="column"
        padding="1.25rem 1.875rem 6.25rem 2.5rem"
      >
        <FlexWrapper flexDirection="column" padding="0 0 1.25rem 0">
          <Typography type="largeTextBold" color="black">
            Add a recipe
          </Typography>
          <Typography type="smallTextRegular" color="label">
            Let's add your recipe, <br />
            it won't take long.
          </Typography>
        </FlexWrapper>
        <FlexWrapper>
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormInputs
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <Typography type="smallTextRegular" color="label">
              Categories
            </Typography>
            <Categories
              categoriesOptions={categoriesOptions}
              categoriesList={categoriesList}
              onChange={(selectedCategory) =>
                setCategoriesList(selectedCategory)
              }
            />
            {ingredientList.map((ingredient, index) => (
              <FlexWrapper key={index} flexDirection="column">
                <FlexWrapper justifyContent="flex-end">
                  <TextButton
                    onClick={() => handleRemoveIngredientFields(index)}
                  >
                    Remove ingredient
                  </TextButton>
                </FlexWrapper>
                <FormInputs
                  name="ingredient"
                  label="Ingredient"
                  value={ingredient.ingredient}
                  onChange={(event) =>
                    handleChangeIngredientInput(index, event)
                  }
                />
                <GridWrapper columns={3} alignItems="end">
                  <FormInputs
                    name="amount"
                    label="Amount"
                    value={ingredient.amount}
                    onChange={(event) =>
                      handleChangeIngredientInput(index, event)
                    }
                  />
                  <SelectStyled
                    id="measure"
                    name="measure"
                    value={ingredient.measure}
                    onChange={(event) =>
                      handleChangeIngredientInput(index, event)
                    }
                  >
                    {options.map((measure) => (
                      <option value={measure.measure}>{measure.measure}</option>
                    ))}
                  </SelectStyled>
                </GridWrapper>
                <FlexWrapper justifyContent="flex-start">
                  <TextButton onClick={() => handleAddIngridentFields()}>
                    Add ingredient
                  </TextButton>
                </FlexWrapper>
              </FlexWrapper>
            ))}
            {procedureList.map((step, index) => {
              return (
                <FlexWrapper
                  key={index}
                  flexDirection="column"
                  padding="1.875rem 0"
                >
                  <FlexWrapper justifyContent="flex-end">
                    <TextButton
                      onClick={() => handleRemoveProcedureFields(index)}
                    >
                      Remove step
                    </TextButton>
                  </FlexWrapper>
                  <FlexWrapper flexDirection="column">
                    {
                      <Typography type="smallTextRegular" color="label">
                        {`Step: ${index + 1}`}
                      </Typography>
                    }
                    <TextareaStyled
                      name="step"
                      value={step.step}
                      maxLength={500}
                      onChange={(event) =>
                        handleChangeProcedureInput(index, event)
                      }
                    />
                  </FlexWrapper>
                  <FlexWrapper justifyContent="space-between">
                    <TextButton onClick={() => handleAddProcedureFields()}>
                      Add step
                    </TextButton>
                  </FlexWrapper>
                </FlexWrapper>
              );
            })}
            <ArrowButton
              width="100%"
              onClick={() => console.log("add something")}
            >
              Add
            </ArrowButton>
          </form>
        </FlexWrapper>
      </FlexWrapper>
    </AddRecipeSectionBlock>
  );
};

const AddRecipeSectionBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const SelectStyled = styled.select`
  max-height: 3.5938rem;
  padding: 1.1875rem 1.25rem;
  border-radius: 0.625rem;
  margin-bottom: 0.625rem;
  color: ${() => theme.colors.label};
  border: 0.0938rem solid ${() => theme.colors.gray4};
`;

const TextareaStyled = styled.textarea`
  min-height: 9.375rem;
  width: 100%;
  border: 0.0938rem solid ${() => theme.colors.gray4};
  border-radius: 0.625rem;
  color: ${() => theme.colors.label};
  padding: 1.1875rem;
  margin: 1rem 0;
  resize: none;
`;
