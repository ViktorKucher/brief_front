import { createPDF } from "@/constants/pdf";
import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useRef } from "react";

export const DetailsModal = ({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  onClose: VoidFunction;
  data?: {
    id: string;
    brief_content: { question: string; answer: string | string[] }[];
  };
}) => {  
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'full'} scrollBehavior={'inside'}>
      <ModalOverlay />
      <ModalContent >
        <ModalCloseButton />
        <ModalBody overflow={"scroll"}>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th fontSize={"xl"}>Question</Th>
                <Th fontSize={"xl"}>Answer</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.brief_content.map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td>{item.question}</Td>
                    <Td>
                      {typeof item.answer === "string" ? (
                        item.answer
                      ) : item.answer === null ? (
                        ""
                      ) : (
                        <>
                          {item.answer.map((item, index) => {
                            return <p key={index}>{item}</p>;
                          })}
                        </>
                      )}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
