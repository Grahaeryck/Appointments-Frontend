import React, {
  ChangeEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {useNavigate, useSearchParams } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Heading,
  Image,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { Select } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import DoctorTimeTable from "../Data/DoctorTimeTable.json"
import { object } from "framer-motion/client";
import Modal from '../Components/Modal.tsx'
import Form from '../Components/Form.tsx'
type Props = {
    DoctorName: string | any;
    DateTime: string | Date | any;
};
function TimeTable({DoctorName, DateTime}: Props) { 
    return (
      <>
      <Box
        display={"flex"}
        marginTop={'20px'}
        flexDirection={"column"}
        justifyContent={"center"}
        textAlign={"center"}
        width={"container.2xl"}
        bg={"#ffffffff"}
      >
        <Text margin={'10px'} textStyle={"h3"}>{DoctorName} - {DateTime.toString()}</Text>
        <TableContainer>
            
          <Table variant='simple'>
            <TableCaption>{DoctorName} time table on {DateTime.toString()}</TableCaption>
            <Thead>
              <Tr>
                {Object.keys(DoctorTimeTable[0]).map((key) => (
                    <Th>{key}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
                {DoctorTimeTable.map((item, index) => (
                    <Tr>
                        <Td>
                            <Text textStyle={"p"}>{item["Time-Slot"]}</Text>
                        </Td>
                        <Td>
                            <Text 
                                textStyle={"p"} 
                                textColor={item.Status.toLowerCase().match("available") ? "#008000" : "#FFBF00"}
                            >
                                {item["Status"]}
                            </Text>
                        </Td>
                        <Td>
                            {item["Patient"] ? 
                                (<><Text textStyle={"p"}>{item["Patient"]}</Text></>)
                                :
                                (<>
                                 <Modal>
                                    {(onClose) => <Form DoctorName={DoctorName} DateTime={DateTime} onClose={onClose} />}
                                </Modal>
                                </>)}
                        </Td>
                    </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      </>
    );
}
export default TimeTable;