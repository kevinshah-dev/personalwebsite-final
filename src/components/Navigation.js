import {
    Flex,
    Button,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useColorModeValue,
    Stack,
    useColorMode,
    IconButton,
    useMediaQuery,
    useDisclosure,
    HStack, 
    Link,
} from "@chakra-ui/react";

import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";


//Navigation Bar for the top of the website
export default function Navigation() {
    const [scroll, setScroll] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

    const scrollToAbout = () => {
        const aboutSection = document.querySelector("#about");
        aboutSection.scrollIntoView({ behavior: "smooth" });
    }

    const scrollToExperience = () => {
        const experienceSection = document.querySelector("#experience");
        experienceSection.scrollIntoView({ behavior: "smooth" });
    }

    const scrollToProjects = () => {
        const projectsSection = document.querySelector("#projects");
        projectsSection.scrollIntoView({ behavior: "smooth" });
    }

    const scrollToContact = () => {
        const contactSection = document.querySelector("#contact");
        contactSection.scrollIntoView({ behavior: "smooth" });
    }

    const changeScroll = () => 
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ? setScroll(true) : setScroll(false);
    

    window.addEventListener("scroll", changeScroll);


    return (
        <>
            <Flex 
                bg={useColorModeValue("gray.100", "gray.900")}
                px={4}
                h={16}
                boxShadow={scroll ? "base" : "none"}
                zIndex="sticky"
                position="fixed"
                as="header"
                alignItems={"center"}
                justifyContent={"space-between"}
                w="100%"
            >
                <Flex alignItems={"center"}>
                    <Stack direction={"row"} spacing={7}>
                    {isLargerThanMD ? (
                        <>
                            <Button variant="ghost" onClick={scrollToAbout}>
                                About
                            </Button>
                            <Button variant="ghost" onClick={scrollToExperience}>
                                Experience
                            </Button>
                            <Button variant="ghost" onClick={scrollToProjects}>
                                Projects
                            </Button>
                            <Button variant="ghost" onClick={scrollToContact}>
                                Contact
                            </Button>
                        
                        </>
                    ) : (
                        <></>
                    )}
                    {isLargerThanMD ? (
                        <></>
                    ) : (
                        <>
                            <Button
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                onClick={onOpen}
                            ></Button>
                            <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                                <DrawerOverlay />
                                <DrawerContent>
                                    <DrawerBody>
                                        <Button variant="ghost" onClick={scrollToAbout}>
                                            About
                                        </Button>
                                        <Button variant="ghost" onClick={scrollToExperience}>
                                            Experience
                                        </Button>
                                        <Button variant="ghost" onClick={scrollToProjects}>
                                            Projects
                                        </Button>
                                        <Button variant="ghost" onClick={scrollToContact}>
                                            Contact
                                        </Button>
                                    </DrawerBody>
                                </DrawerContent>
                            </Drawer>
                        </>
                    )}
                    </Stack>
                </Flex>
            </Flex>
        </>
    );
};