import {
    Divider,
    Stack,
    Text,
    Container,
    Box,
    HStack
} from "@chakra-ui/react"

export default function() {
    return (
        <>
            <Container maxW={"3xl"} id="about">
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 8, md: 14}}
                    pb={{ base: 26, md: 36 }}
                >
                    <Stack align="center" direction="row" px={4}>
                        <HStack mx={4}>
                            <Text color="blue.400" fontWeight={800}>
                                01
                            </Text>
                            <Text fontWeight={800}>About</Text>
                        </HStack>
                        <Divider orientation="horizontal"/> 
                    </Stack>
                    <Text color={"gray.400"} fontSize={"xl"} px={4}>
                        Hi I'm Kevin! I'm a software engineer with a lifelong interest in writing code, developing interesting applications, and making the world a better place with technology.
                    </Text>
                    <Text color={"gray.400"} fontSize={"xl"} px={4}>
                     Scroll down to see some of the places I've worked and projects I've developed!

                    </Text>
                </Stack>
            </Container>
        </>
    )
}