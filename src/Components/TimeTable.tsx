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
  Card,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button
} from '@chakra-ui/react'
import DoctorTimeTable from "../Data/DoctorTimeTable.json"
import Modal from '../Components/Modal.tsx'
import Form from '../Components/Form.tsx'
import {getSchedule} from "./APIHandler/BackendAPIHandler.tsx"
import dayjs from "dayjs";
import TimeTBbg from '../Asset/TimetableBG.jpg'
import Doctorsvg from '../Asset/Doctor.svg.png'

interface IDoctorDetails {
  drID: string,
  fullName: string,
  poli: string,
  startTime: string,
  endTime: string,
  offDays: string[]
}

interface ITimeSlot {
  appointmentTime: string,
  isAvailable: boolean,
  patientName: string,
  patientEmail: string,
  patientPhoneNumber: string,
}

interface ISchedule {
  drID: string,
  timeSlot: ITimeSlot[]
}

type Props = {
    doctor: IDoctorDetails;
    DateTime: string | Date | any;
};
function TimeTable({doctor, DateTime}: Props) { 
    console.log("Date Time", DateTime);
    const [schedules, setSchedule] = useState<ISchedule | null>(
      null
    );
    const [isError, setIsError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const formattedDate = dayjs(DateTime).format("YYYY-MM-DD").toString();

  useEffect(() => {
      getSchedule(
        doctor.drID,
        formattedDate,
        (res) => {
          console.log("access details", res);
          setSchedule(res);
          setTimeout(() => {
          }, 3000);
        },
        (error) => {
          console.log("access details err", error);
          setIsError(
            `There was an issue retrieving the data. Try again or check back later`
          );
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        }
      );
    },[]);

    return (
      <>
      {doctor ? (
        <Box
        display={"flex"}
        marginTop={'20px'}
        flexDirection={"column"}
        justifyContent={"center"}
        textAlign={"center"}
        w="100vw"
        ml="calc(-50vw + 50%)"
        bgImage={TimeTBbg} 
        bgAttachment={'fixed'}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Box bgColor={'rgba(255, 255, 255, 0.6)'} justifyItems={'center'} justifyContent={"center"}>
          <Box marginY={'40px'} width={'80%'} justifyItems={'center'} justifyContent={"center"}>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              minW={'50%'}
            >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={Doctorsvg}
                alt='Dr Profile Picture'
              />
              <Stack>
                <CardBody justifyContent={"center"} justifyItems={'center'}>
                  <Heading size='md'>{doctor.fullName}</Heading>
                  <Text py='0.5'>{doctor.poli}</Text>
                  <Text py='0.5'>{doctor.startTime} - {doctor.endTime}</Text>
                </CardBody>
              </Stack>
            </Card>
          </Box>
          
          <TableContainer>
            <Table variant='striped' colorScheme='blackAlpha' size='lg' width={{ base: 'full', md: '10%' }} mx='auto'>
              <TableCaption>{doctor.fullName} time table on {DateTime.toString()}</TableCaption>
              <Thead>
                <Tr>
                  {Object.keys(DoctorTimeTable[0]).map((key) => (
                      <Th>{key}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                  {schedules?.timeSlot.map((item, index) => (
                      <Tr>
                          <Td>
                              <Text textStyle={"p"}>{item.appointmentTime}</Text>
                          </Td>
                          <Td>
                              <Text 
                                  textStyle={"p"} 
                                  textColor={item.isAvailable ? "#008000" : "#FFBF00"}
                              >
                                  {item.isAvailable ? "Available" : "Not-Available"}
                              </Text>
                          </Td>
                          <Td>
                              {item.patientName ? 
                                  (<><Text textStyle={"p"}>{item.patientName}</Text></>)
                                  :
                                  (<>
                                   <Modal>
                                      {(onClose) => <Form DoctorName={doctor.fullName} DoctorID={doctor.drID} date={formattedDate} time={item.appointmentTime} onClose={onClose} />}
                                  </Modal>
                                  </>)}
                          </Td>
                      </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      ):(<></>)}
      </>
    );
}
export default TimeTable;