import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const reactProjects = [
  {
    title: "Concentration: Star Wars Edition",
    description:
      "Hunt your bounty! Match pictures of iconic characters in this Star Wars themed memory card game.",
    url: "https://providedplay.github.io/Match12/",
    getImageSrc: () => require("../images/Concentration Star Wars Media Art 2 cropped.jpg"),
  },
  {
    title: "Little Lemon",
    description:
      "The capstone project for my Meta Front End Developer Certification; a reactive home- and booking- page for the imaginary Italian restaurant 'Little Lemon'.",
    url: "https://providedplay.github.io/Little-Lemon-Capstone-Project/",
    getImageSrc: () => require("../images/LittleLemon.jpg")
  },
];

const gameProjects =[
  {
    title: "If Alive, Run",
    description:
      "A short, challenging 2D platformer made for speedrunning. You can beat this game in three minutes, but you won't",
    url: "https://gamejolt.com/games/IfAliveRun/467451",
    getImageSrc: () => require("../images/If Alive Run Avatar Gif.gif"),
  },
  {
    title: "Conway's Game of Life by ProvidedPlay",
    description:
      "Ever wanted to run a 160-million cell simulation of Conway's Game of Life at 240 frames per second? No? Well, check this out anyways.",
    url: "https://providedplay.itch.io/conways-game-of-life-by-provided-play",
    getImageSrc: () => require("../images/GOL Gif 13.gif"),
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
      {renderProjectSection("Unity Projects", 8, gameProjects)}
    </FullScreenSection>
  );
};

export default ProjectsSection;
