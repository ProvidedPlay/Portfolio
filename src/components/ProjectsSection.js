import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const reactProjects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    url: "urlHere",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    url: "urlHere",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    url: "urlHere",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    url: "urlHere",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const gameProjects =[
  {
    title: "If Alive, Run",
    description:
      "A short, challenging 2D platformer made for speedrunning. You can beat this game in three minutes, but you won't",
    url: "https://gamejolt.com/games/IfAliveRun/467451",
    getImageSrc: () => require("../images/If Alive Run Avatar Gif.gif"),
  }
]

const renderCard = (cardData) => {
  return(
  <Card
  key={cardData.title}
  title={cardData.title}
  description={cardData.description}
  url={cardData.url}
  imageSrc={cardData.getImageSrc()}
  />
  )
}

const renderProjectSection = (sectionTitle, gridGap, projectGroup) => {
  return(
    <div>
      <Heading as="h1" id="projects-section">
        {sectionTitle}
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={gridGap}
      >
        {projectGroup.map((project) => (renderCard(project)))}
      </Box>
    </div>
  )
}

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      {renderProjectSection("React Projects", 8, reactProjects)}
      {renderProjectSection("Game Projects", 8, gameProjects)}
    </FullScreenSection>
  );
};

export default ProjectsSection;
