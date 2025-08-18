import React from "react";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

type Props = {
  children: (onClose: () => void) => React.ReactNode; // pass onClose
};

function Modal({ children }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Book this slot</Button>

      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Set Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children(onClose)}</ModalBody>
        </ModalContent>
      </ChakraModal>
    </>
  );
}
export default Modal;
