import {
    Divider,
    Stack,
    Text,
    Container,
    Box,
    HStack,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    Image,
    Heading,
    SimpleGrid,
    Badge,
    Link,
    Center,
} from "@chakra-ui/react";

import { Fade } from "react-reveal";
import { useState } from "react";


export default function Projects() {

    const [selected, setSelected] = useState("All");

    const handleSelected = (value) => {
        setSelected(value);
    };

return (
    <>
        <Container maxW={"3xl"} id="projects">
            <Stack
                as={Box}
                textAlign={"center"}
                spacing={{ base: 8, md: 14 }}
                pb={{ base: 20, md: 36 }}
            >
                <Stack align="center" direction="row" p={4}>
                    <HStack mx={4}>
                        <Text color={"blue.400"} fontWeight={800}>
                            03
                        </Text>
                        <Text fontWeight={800}> Projects</Text>
                    </HStack>
                    <Divider orientation="horizontal" />
                </Stack>
                <Stack px={4} spacing={4}>
                    <Fade bottom>
                        <Card
                            key="Multimedia Hub"
                            direction={{
                                base: "column",
                            }}
                            overflow="hidden"
                        >
                            <Image objectFit="cover" src='https://i.imgur.com/iKP25xh.png'/>
                            <Stack>
                                <CardBody align = "left">
                                    <Heading size="md">Multimedia Hub</Heading>

                                    <Text py={2}>
                                        Multimedia Hub is a website that allows users to browse Movies and TV Shows that are currently trending. Additionally, users can see aggregate ratings, cast members, and trailers. This website was built with the help of the TMDB API. 
                                    
                                    </Text>
                                    <HStack py={2}>
                                        <a key="Github" href="https://github.com/kevinshah-dev/multimediahub">
                                            <Button color="blue.400">
                                                Github
                                            </Button>
                                        </a>
                                        <a key="Link" href="https://multimediahub.netlify.app/">
                                            <Button color="blue.400">
                                                Website Link
                                            </Button>
                                        </a>
                                    </HStack>
                                </CardBody>
                            </Stack>

                        </Card>
                    </Fade>

                </Stack>


            </Stack>
        </Container>
        
        
    </>
    )

}