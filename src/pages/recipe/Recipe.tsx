import { GoBackButton } from "components/buttons/GoBackButton";
import { OpenMore } from "components/buttons/OpenMore";
import { Modal } from "components/modal/Modal";
import { ModalContent } from "components/modal/modalContent/ModalContext";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const Recipe: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams() as {
    id: string;
  };

  return (
    <FlexWrapper padding="3.375rem 1.875rem">
      <FlexWrapper justifyContent="space-between" width="100%">
        <GoBackButton onClick={() => console.log("Go Back")} />
        <OpenMore onClick={() => setModalOpen(true)} />
      </FlexWrapper>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <ModalContent setModalOpen={setModalOpen} id={id} />
      </Modal>
    </FlexWrapper>
  );
};
