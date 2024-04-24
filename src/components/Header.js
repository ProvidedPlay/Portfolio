import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGamepad } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faItchIo,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";



const socials = [
  {
    icon: faEnvelope,
    url: "mailto: mosesreid@hotmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/ProvidedPlay",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faGamepad,
    url: "https://gamejolt.com/@ProvidedPlay",
  },
  {
    icon:faItchIo,
    url: "https://providedplay.itch.io/"
  }
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


const [translateY, changeTranslateY] = useState("translateY(0)")
const oldScrollY = useRef(window.scrollY);

useEffect(() => {
  const handleScroll = () => {

    if (window.scrollY !== oldScrollY.current){
      const newTranslateValue = window.scrollY > oldScrollY.current ? "translateY(-200px)" : "translateY(0)"
      changeTranslateY(newTranslateValue) 
      oldScrollY.current = window.scrollY
    }
  }
  window.addEventListener('scroll', handleScroll)

  return () => (
    window.removeEventListener('scroll', handleScroll)
  )
},[])

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={translateY}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>

            {/* Add social media links based on the `socials` data */}
              <HStack spacing={8}>
                {socials.map(({icon, url}) => <a href={url} key={url}>
                  <FontAwesomeIcon icon={icon} size="2x"/>
                </a>
                )}
              </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="#contact-me" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
