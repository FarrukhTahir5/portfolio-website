import React from "react";
import { Avatar, Heading, Box, VStack, Center } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    id="home-section"
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={5} align="stretch">
      <Box display="flex" flexDirection={"column"} mt="2" justifyContent={"center"} alignItems="center">
        <Avatar name={greeting} src={"https://i.pravatar.cc/150?img=7"}  size="2xl"/>
        <Heading as="h2" size="l">{greeting}</Heading>
      </Box>
      <Heading as="h2" size="xl" textAlign='center'>
        {bio1}
      </Heading>
      <Heading as="h2" size="xl" textAlign='center'>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
