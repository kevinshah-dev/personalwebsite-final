import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
} from "@chakra-ui/react";


export default function Header() {
    const scrollToContact = () => {
        const contactSection = document.querySelector("#contact");
        contactSection.scrollIntoView({ behavior: "smooth" });
    };

    const linkedIn = () => {
        window.open(
            `https://www.linkedin.com/in/ks539/`,
            "_blank",
            "noreferrer,noopener"
        );
    }
    return (
        <>
            <Heading>
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Heading>

            <Container maxW={"3xl"} id="hero">
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 8, md: 14}}
                    pb={{ base: 20, md: 36 }}
                    pt={{ base: 36, md: 52 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: "2xl", sm: "4xl", md: "6xl"}}
                        lineHeight={"110%"}
                    >
                        Kevin Shah <br />
                        <Text as={"span"} color={"blue.400"}>
                            Full-Stack Software Engineer
                        </Text>
                    </Heading>
                    <Text
                        color={"gray.500"}
                        fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                    >
                        Testing                        

                    </Text>
                    <Stack
                        direction={"column"}
                        spacing={3}
                        align={"center"}
                        alignSelf={"center"}
                        position={"relative"}
                    >
                        <Button
                            colorScheme={"blue"}
                            bg={"blue.400"}
                            rounded={"full"}
                            px={6}
                            _hover={{
                                bg: "blue.400",
                            }}
                            onClick={linkedIn}
                        
                        >
                            Let's Connect!
                        </Button>
                        <Button
                            variant={"link"}
                            colorScheme={"blue"}
                            size={"sm"}
                            onClick={scrollToContact}
                        >
                            Contact Me
                        </Button>
                    </Stack>

                </Stack>
            </Container>   
        </>
    )
}