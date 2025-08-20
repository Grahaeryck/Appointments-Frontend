import React, {
  ChangeEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {useNavigate, useSearchParams,Link } from 'react-router-dom';
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
  Select
} from "@chakra-ui/react";
import DoctorNames from "../Data/DoctorList.json"
import TimeTable from "./TimeTable.tsx";
import DatePicker from "./DatePicker.tsx";
import dayjs, { Dayjs } from "dayjs";
import {getDoctors} from "./APIHandler/BackendAPIHandler.tsx";

interface IDoctorDetails {
  drID: string,
  fullName: string,
  poli: string,
  startTime: string,
  endTime: string,
  offDays: string[]
}
type Props = {};
function NewLanding({}: Props) {
  const [doctors, setDoctors] = useState<IDoctorDetails[] | null>(
    null
  );
  const [selectedDoctor, setSelectedDoctor] = useState<IDoctorDetails>();
  const [drID, setDrID] = useState<string>("");
  const [offDays, setOffDays] = useState<string[]>([]);
  const selectionHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const doctorName = e.target.value;
    const selected = doctors?.find(d => d.fullName === doctorName);
    if (selected) {
      setSelectedDoctor(selected);
      setDrID(selected.drID);
      setOffDays(selected.offDays);
    }
  };
  const [selectedDate, setSelectedDate] = React.useState<string>("");
  const dateChangeHandler = (newValue: string) => {
      setSelectedDate(newValue);
  }

  
  const [doctorIsError, setDoctorIsError] = useState("");
  const [doctorsIsLoading, setDoctorsIsLoading] = useState(false);
  const uniqueClinic: string[] = [];

  useEffect(() => {
    document.title = `SNDY Appointments`;
  }, []);

  useEffect(() => {
    getDoctors(
      (res) => {
        console.log("access details", res);
        setDoctors(res);
        setTimeout(() => {
        }, 3000);
      },
      (error) => {
        console.log("access details err", error);
        setDoctorIsError(
          `There was an issue retrieving the data. Try again or check back later`
        );
        setTimeout(() => {
          setDoctorsIsLoading(false);
        }, 3000);
      }
    );
  },[]);

useEffect(() => {
  doctors?.map((doctor) => (
    uniqueClinic.push(doctor.poli)
  ))
}, [doctors]);


    return (
      <>
      <Box
        minH={"sm"}
        marginTop={'200px'}
        marginBottom={'50px'}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        textAlign={"center"}
        bgColor={'rgba(255, 255, 255, 0.6)'}
      >
        <Stack>
            <Text textStyle={"h3"} color={'rgba(27, 18, 18, 1)'}>Select Doctor</Text>
            <Text textStyle={"text_label"} py={1}>
              Select one doctor from list below to view available schejule
              {/* Try other URL or back to new compliance tracker page. */}
            </Text>
            <Box justifyContent={"center"} textAlign={"center"} justifyItems={"center"}>
              <Select
                bgColor={'#F9F6EE'}
                textOverflow="ellipsis"
                placeholder="Select Doctor"
                size="lg"
                maxWidth="80%"
                onChange={selectionHandler}
                sx={{
                  option: {
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  },
                  // this applies to the dropdown itself
                  maxHeight: "calc(1.5em * 5)", // limit to 5 rows
                  overflowY: "auto",
                }}
              >
                {doctors?.map((doctor) => (
                  <option key={doctor.drID} value={doctor.fullName}>
                    {doctor.fullName}
                  </option>
                ))}
              </Select>
            </Box>
            <Box sx={{ width: '100%', height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <DatePicker onDateChange={dateChangeHandler} disabledDays={offDays}/>
            </Box>
          <Box>
          {selectedDoctor && selectedDate? 
            (
              <>
                <TimeTable doctor={selectedDoctor} DateTime={selectedDate}></TimeTable>
              </>
            ):(
              <>
                <Text textStyle={"h3"}>Please Select Doctor & Date</Text>
              </>
            )}
          </Box>
        </Stack>
      </Box>
      </>
    );
}
export default NewLanding;