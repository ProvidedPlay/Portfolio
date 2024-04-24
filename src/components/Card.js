import { Heading, HStack, Image, Text, VStack, } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
    <VStack bg="white" rounded="2xl" overflow="hidden">
      <VStack spacing={4}>
        <Image src={imageSrc} alt="Project Image" width="100%" rounded="2xl"/>
      </VStack>
      <VStack color="black" p={4} alignItems="left">
        <Heading size="md">{title}</Heading>
        <Text color="dimgray">{description}</Text>
        <HStack>
          <a href={url}> See more</a>
          <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
