import {
    Divider,
    Stack,
    Text,
    Container,
    Box,
    HStack,
    Heading,
    Center,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";

export default function Contact() {
    const linkedin = () => {
        window.open("https://www.linkedin.com/in/ks539/", "_blank", "noreferrer,noopener");
    };
    const github = () => {
        window.open("https://github.com/kevinshah-dev", "_blank", "noreferrer,noopener");
    };
    const email = () => {
        window.open("ks539@duke.edu", "_blank", "noreferrer,noopener");
    }

    return (
        <>
        <Container maxW={"3xl"} id="contact">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={"blue.400"} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
            <Text color={"blue.500"} fontWeight={600} fontSize={"lg"} px={4}>
              ks539@duke.edu
            </Text>
            <Center>
              <HStack pt={4} spacing={4}>
                <FaLinkedin onClick={linkedin} size={28} />
                <FaGithub onClick={github} size={28} />
                <FaEnvelope onClick={email} size={28} />
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
        
        
        </>
    )
}




