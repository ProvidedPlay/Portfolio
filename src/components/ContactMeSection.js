import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      type: "openSource",
      message: ""
    },
    onSubmit: (values) => {
      submit("https://exampleURL", values);
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Required"),
      user_email: Yup.string().email("Invalid Email").required("Required"),
      message: Yup.string().required("Required").min(25, "Must be at least 25 characters")
    }),
  });

  useEffect(() => {
    if(response){
      onOpen(response.type, response.message);
      if(response.type === "success"){
        formik.resetForm();
      }
    }
  },[response])
  
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.user_name && formik.touched.user_name}>
                <FormLabel htmlFor="user_name">Name</FormLabel>
                <Input
                  id="user_name"
                  name="user_name"
                  {...formik.getFieldProps('user_name')}
                />
                <FormErrorMessage>{formik.errors.user_name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.user_email && formik.touched.user_email}>
                <FormLabel htmlFor="user_email">Email Address</FormLabel>
                <Input
                  id="user_email"
                  name="user_email"
                  type="user_email"
                  {...formik.getFieldProps('user_email')}
                />
                <FormErrorMessage>{formik.errors.user_email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.errors.message && formik.touched.message}>
                <FormLabel htmlFor="message">Your message</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  height={250}
                  {...formik.getFieldProps('message')}
                />
                <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
