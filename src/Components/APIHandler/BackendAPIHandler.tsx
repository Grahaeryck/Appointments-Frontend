import axios, { AxiosResponse, AxiosError } from "axios";

const BackendAPIHandler = axios.create({
  baseURL: "https://appointment-backend-dfgjbjcbashzameq.indonesiacentral-01.azurewebsites.net/API/",
  headers: {
    "Content-Type": "application/json",
    // "Content-Type": "application/json;charset=UTF-8",
  },
});

export const getDoctors = async (
  dataCallback: (data: any) => void,
  errorCallback: (error: Error | AxiosError) => void
) => {
  await BackendAPIHandler
    .get(`Appointment/GetDoctors`)
    .then((res) => dataCallback(res.data))
    .catch((error) => errorCallback(error));
};

export const getSchedule = async (
  doctorID: string,
  date: string,
  dataCallback: (data: any) => void,
  errorCallback: (error: Error | AxiosError) => void
) => {
  const dataParam = {
    drID: doctorID,
    appointmentDate: date,
  };

  await BackendAPIHandler
    .post("Schedule/GetSchedule", dataParam)
    .then((res) => dataCallback(res.data))
    .catch((error) => errorCallback(error));
};

export const insertSchedule = async (
  doctorID: string,
  pName: string,
  pEmail: string,
  pNumber: string,
  date: string,
  time: string,
  dataCallback: (data: any) => void,
  errorCallback: (error: Error | AxiosError) => void
) => {
  const dataParam = {
    drID: doctorID,
    patientName: pName,
    patientEmail: pEmail,
    patientPhoneNumber: pNumber,
    appointmentDate: date,
    appointmentTime: time
  };

  await BackendAPIHandler
    .post("Schedule/InsertSchedule", dataParam)
    .then((res) => dataCallback(res))
    .catch((error) => errorCallback(error));
};