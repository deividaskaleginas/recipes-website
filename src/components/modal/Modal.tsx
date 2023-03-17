import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface ModalProps {
  children: ReactNode | ReactNode[];
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<ModalProps> = ({ modalOpen, children }) => {
  if (!modalOpen) return null;
  return createPortal(<ModalStyled>{children}</ModalStyled>, document.body);
};

const ModalStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: #0000009d;
`;
