import React from "react";
import { Avatar, Box, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ProfilePicture from "../images/My Profile Pic.png"

const greeting = "Hello, I'm Moses";
const bio1 = "A game and web developer";
const bio2 = "specialised in Unity and React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Box>
          <Avatar size="2xl" name="My Picture" src={ProfilePicture}/>
        </Box>
        <Box>
          <Heading size="md">{greeting}</Heading>
        </Box>
      </VStack>
      <VStack spacing={6}>
        <Box>
          <Heading>{bio1}</Heading>
        </Box>
        <Box>
          <Heading>{bio2}</Heading>
        </Box>   
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
