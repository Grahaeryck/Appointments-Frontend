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
import DoctorNames from "../Data/DoctorList.json"
import TimeTable from "./TimeTable.tsx";
import DatePicker from "./DatePicker.tsx";
import dayjs, { Dayjs } from "dayjs";

type Props = {};
function NewLanding({}: Props) { 
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const selectionHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedDoctor(e.target.value);
    }
  
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());
  const dateChangeHandler = (newValue: Dayjs) => {
            setSelectedDate(newValue);
        }

  useEffect(() => {
    document.title = `SNDY Appointments`;
  }, []);

    return (
      <>
      <Box
        minH={"lg"}
        marginTop={'200px'}
        marginBottom={'50px'}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        textAlign={"center"}
      >
        <Stack>
            <Text textStyle={"h3"}>Select Doctor</Text>
            <Text textStyle={"text_label"} py={1}>
              Select one doctor from list below to view available schejule
              {/* Try other URL or back to new compliance tracker page. */}
            </Text>
            <Box justifyContent={"center"} textAlign={"center"} justifyItems={"center"}>
              <Select placeholder='Select Doctor' size='lg' maxWidth='80%' onChange={selectionHandler}>
                  {DoctorNames.map((item, index) => (
                    <option key={index} value={item.Name}>{item.Name}
                    </option>
                ))}
              </Select>
            </Box>
            <Box sx={{ width: '100%', height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <DatePicker onDateChange={dateChangeHandler}/>
            </Box>
          <Box>
          {selectedDoctor ? 
            (
              <>
                <TimeTable DoctorName={selectedDoctor} DateTime={selectedDate}></TimeTable>
              </>
            ):(
              <>
                <Text textStyle={"h3"}>Please Select Doctor</Text>
              </>
            )}
          </Box>
        </Stack>
      </Box>
      </>
    );
}
export default NewLanding;