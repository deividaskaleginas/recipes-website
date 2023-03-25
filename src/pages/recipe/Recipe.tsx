import { GoBackButton } from "components/buttons/GoBackButton";
import { IngredientsButton } from "components/buttons/IngredientsButton";
import { OpenMore } from "components/buttons/OpenMore";
import { ProcedureButton } from "components/buttons/ProcedureButton";
import { Ingredients } from "components/ingredients/Ingredients";
import { Modal } from "components/modal/Modal";
import { ModalContent } from "components/modal/modalContent/ModalContext";
import { OpenedRecipeData } from "components/openedRecipe/OpenedRecipeData";
import { Steps } from "components/steps/Steps";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import DishesContext from "contexts/dishesContext/dishesContext";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

export const Recipe: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const { dishesData } = useContext(DishesContext);
  const { id } = useParams() as {
    id: string;
  };

  const openedRecipe = dishesData.find((dish) => dish.id === id);
  console.log(openedRecipe);

  return (
    <FlexWrapper padding="3.375rem 1.875rem" flexDirection="column">
      <FlexWrapper justifyContent="space-between" width="100%">
        <GoBackButton />
        <OpenMore onClick={() => setModalOpen(true)} />
      </FlexWrapper>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <ModalContent setModalOpen={setModalOpen} id={id} />
      </Modal>
      <OpenedRecipeData
        id={id}
        photo={openedRecipe!.photo}
        time={openedRecipe!.time}
        votes={openedRecipe!.votes}
        title={openedRecipe!.title}
        authorData={openedRecipe!.authorData}
      />
      <FlexWrapper margin="0 0 0.5rem">
        <IngredientsButton
          isActive={isActive}
          onClick={() => setIsActive(true)}
        />
        <ProcedureButton
          isActive={isActive}
          onClick={() => setIsActive(false)}
        />
      </FlexWrapper>
      {isActive ? (
        <Ingredients
          ingredients={openedRecipe!.ingridents}
          portions={openedRecipe!.portions}
        />
      ) : (
        <Steps
          procedure={openedRecipe!.procedure}
          portions={openedRecipe!.portions}
        />
      )}
    </FlexWrapper>
  );
};
