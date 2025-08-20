import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  Button,
  useToast,
} from "@chakra-ui/react";
import {insertSchedule} from './APIHandler/BackendAPIHandler.tsx';

type Props = {
  DoctorName: string;
  DoctorID: string;
  time: string;
  date: string;
  onClose: () => void;
};

function Form({ DoctorName, DoctorID, time, date, onClose }: Props) {
  const message = 'Hello from my React Native app!';
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormData({ ...formData, [field]: value });

      if (field === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrors({
          ...errors,
          email: emailRegex.test(value) ? "" : "Please enter a valid email.",
        });
      }

      if (field === "phone") {
        const phoneRegex = /^[0-9]{8,15}$/;
        setErrors({
          ...errors,
          phone: phoneRegex.test(value) ? "" : "Enter a valid phone number (8–15 digits).",
        });
      }
    };

  const handleSubmit = () => {
    setIsLoading(true);
    insertSchedule(
            DoctorID,
            formData.fullName,
            formData.email,
            formData.phone,
            date,
            time,
            (res) => {
              console.log("access details", res);
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
    {toast({
        title: "Appointment Scheduled",
        description: `We’ve scheduled your appointment on ${date} at ${time} with ${DoctorName}.`,
        status: "success",
        duration: 9000,
        isClosable: true,
      })};
    onClose();
  };

  const isFormInvalid =
    !formData.fullName.trim() ||
    !formData.email.trim() ||
    !formData.phone.trim() ||
    errors.email !== "" ||
    errors.phone !== "";

  return (
    <FormControl isRequired>
      <Stack spacing={4} mb="10px">
        <FormLabel>Full Name</FormLabel>
        <Input
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange("fullName")}
        />

        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            placeholder="someone.anyone@sndy.com"
            value={formData.email}
            onChange={handleChange("email")}
          />
          {!errors.email ? (
            <FormHelperText>We’ll never share your email.</FormHelperText>
          ) : (
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.phone}>
          <FormLabel>Phone Number</FormLabel>
          <InputGroup>
            <InputLeftAddon>+62</InputLeftAddon>
            <Input
              type="tel"
              placeholder="phone number"
              value={formData.phone}
              onChange={handleChange("phone")}
            />
          </InputGroup>
          {!errors.phone ? (
            <FormHelperText>Use your active WhatsApp number if possible.</FormHelperText>
          ) : (
            <FormErrorMessage>{errors.phone}</FormErrorMessage>
          )}
        </FormControl>

        <Button
          colorScheme="blue"
          onClick={handleSubmit}
          isDisabled={isFormInvalid}
        >
          Submit
        </Button>
      </Stack>
    </FormControl>
  );
}
export default Form;
