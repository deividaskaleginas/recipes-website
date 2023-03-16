import { MoreInfo } from "components/moreInfo/MoreInfo";
import { StarRaiting } from "components/starRating/StarRating";
import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import React, { useState } from "react";

interface ModalContentProps {
  id: string;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContent: React.FC<ModalContentProps> = ({
  setModalOpen,
  id,
}) => {
  const [isRateing, setIsRateing] = useState(false);
  return (
    <>
      {!isRateing ? (
        <MoreInfo
          id={id}
          setModalOpen={setModalOpen}
          setIsRateing={setIsRateing}
        />
      ) : (
        <StarRaiting
          id={id}
          setIsRateing={setIsRateing}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};
