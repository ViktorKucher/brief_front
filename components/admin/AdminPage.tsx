"use client";
import { DeleteIcon, DownloadIcon, EditIcon } from '@chakra-ui/icons'
import { deleteBrief, getAllBriefs } from "@/constants/axios";
import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { DetailsModal } from "./DetailsModal";
import { createPDF } from "@/constants/pdf";

export const AdminPage = () => {
    const [data,setData] = useState<{
        id: string;
        brief_content: { question: string; answer: string|string[] }[];
      }>()
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [blanks, setBlanks] = useState<
    {
      id: string;
      brief_content: { question: string; answer: string }[];
    }[]
  >();
  useEffect(() => {
    getAllBriefs().then(
      ({
        data,
      }: {
        data: {
          id: string;
          brief_content: { question: string; answer: string }[];
        }[];
      }) => {
        console.log(data)
        setBlanks(data);
      }
    );
  }, []);
  const onClick = (id:string) =>{
    setData(blanks?.find((item)=>item.id===id))
    onOpen()
  }
  const downloadPdf = (id:string) =>{
    const data = blanks?.find((item)=>item.id===id)?.brief_content
    data && createPDF(data)
  }
  const deleteButton = (id:string) =>{
    deleteBrief(id).then(
      ({
        data,
      }: {
        data: {
          id: string;
          brief_content: { question: string; answer: string }[];
        }[];
      }) => {
        console.log(data)
        setBlanks(data);
      }
    );
  }
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th fontSize={'xl'}>Name</Th>
              <Th fontSize={'xl'}>Phone</Th>
              <Th fontSize={'xl'}>Datails</Th>
              <Th fontSize={'xl'}>Download</Th>
              <Th fontSize={'xl'}>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {blanks?.map((item, index) => {
              return (
                <Tr key={index}>
                  <Td>{item?.brief_content[0]?.answer}</Td>
                  <Td>{item?.brief_content[1]?.answer}</Td>
                  <Td><Button colorScheme='blue' onClick={()=>onClick(item.id)}>More</Button></Td>
                  <Td><Button onClick={()=>downloadPdf(item.id)}><DownloadIcon/></Button></Td>
                  <Td><Button colorScheme='red' onClick={()=>deleteButton(item.id)}><DeleteIcon/></Button></Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <DetailsModal isOpen={isOpen} onClose={onClose} data={data}/>
    </>
  );
};
