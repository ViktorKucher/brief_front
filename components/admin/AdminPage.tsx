"use client";
import { DeleteIcon, DownloadIcon } from "@chakra-ui/icons";
import { deleteBrief, getAllBriefs } from "@/constants/axios";
import {
  Heading,
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DetailsModal } from "./DetailsModal";
import { createPDF } from "@/constants/pdf";
import { CircularProgress } from "@chakra-ui/react";

export const AdminPage = () => {
  const [isAuthorize, setIsAuthorize] = useState(false);
  const [data, setData] = useState<{
    id: string;
    brief_content: { question: string; answer: string | string[] }[];
  }>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [blanks, setBlanks] = useState<
    {
      id: string;
      brief_content: { question: string; answer: string }[];
    }[]
  >();
  useEffect(() => {
    getAllBriefs()
      .then(
        ({
          data,
        }: {
          data: {
            id: string;
            brief_content: { question: string; answer: string }[];
          }[];
        }) => {
          setBlanks(data);
          setIsAuthorize(true);
        }
      )
      .catch(() => setIsAuthorize(false));
  }, []);
  const onClick = (id: string) => {
    setData(blanks?.find((item) => item.id === id));
    onOpen();
  };
  const downloadPdf = (id: string) => {
    const data = blanks?.find((item) => item.id === id)?.brief_content;
    data && createPDF(data);
  };
  const deleteButton = async (id: string) => {
    await deleteBrief(id)
      .then(
        ({
          data,
        }: {
          data: {
            id: string;
            brief_content: { question: string; answer: string }[];
          }[];
        }) => {
          setBlanks(data);
          setIsAuthorize(true);
        }
      )
      .catch(() => setIsAuthorize(true));
  };
  if (!isAuthorize) {
    return <CircularProgress isIndeterminate color="green.300" />;
  }
  return (
    <>
      <Box padding={10}>
        <Heading>Замовлення</Heading>
        <TableContainer border={2} borderColor={"black"} borderStyle={"solid"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th fontSize={"xl"}>Name</Th>
                <Th fontSize={"xl"}>Phone</Th>
                <Th fontSize={"xl"}>Datails</Th>
                <Th fontSize={"xl"}>Download</Th>
                <Th fontSize={"xl"}>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {blanks?.map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td>{item?.brief_content[0]?.answer}</Td>
                    <Td>{item?.brief_content[1]?.answer}</Td>
                    <Td>
                      <Button
                        colorScheme="blue"
                        onClick={() => onClick(item.id)}
                      >
                        More
                      </Button>
                    </Td>
                    <Td>
                      <Button onClick={() => downloadPdf(item.id)}>
                        <DownloadIcon />
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        colorScheme="red"
                        onClick={() => deleteButton(item.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <DetailsModal isOpen={isOpen} onClose={onClose} data={data} />
      </Box>
    </>
  );
};
