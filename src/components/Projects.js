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

    const [selected, setSelected] = useState("Data Science");

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
                            key="PokerGPT"
                            direction={{
                                base: "column",
                            }}
                            overflow="hidden"
                        >
                            <Image objectFit="cover" src='https://i.imgur.com/Z1qzJmx.jpg'/>
                            <Stack>
                                <CardBody align = "left">
                                    <Heading size="md">PokerGPT</Heading>

                                    <Text py={2}>
                                    Using the OpenAI GPT-4 API, I built a website that analyzes a poker position and recommends how to play optimally using pot size, community cards, bet sizes, position, and the players cards.
                                    
                                    </Text>
                                    <HStack py={2}>
                                        <a key="Github" href="https://github.com/kevinshah-dev/pokergpt">
                                            <Button color="blue.400">
                                                Github
                                            </Button>
                                        </a>
                                        <a key="Link" href="https://pokergpt-wine.vercel.app">
                                            <Button color="blue.400">
                                                Website Link
                                            </Button>
                                        </a>
                                    </HStack>
                                    <HStack pt={4} spacing={2}>
                                        <Badge 
                                            key="Javascript"
                                            colorScheme="blue"
                                        >
                                            GPT-4
                                        </Badge>
                                        <Badge
                                            key="React"
                                            colorScheme="blue"
                                        >
                                            Next.js
                                        </Badge>
                                        <Badge
                                            key="API"
                                            colorScheme="blue"                                        
                                        >
                                            API
                                        </Badge>
                                        <Badge
                                            key="MaterialUI"
                                            colorScheme="blue"                                        
                                        >
                                            TailwindCSS
                                        </Badge>
                                    </HStack>
                                </CardBody>
                            </Stack>

                        </Card>
                    </Fade>
                    <Fade bottom>
                        <Card
                            key="Historcle"
                            direction={{
                                base: "column",
                            }}
                            overflow="hidden"
                        >
                            <Image objectFit="cover" src='https://i.imgur.com/TPBRS55.png'/>
                            <Stack>
                                <CardBody align = "left">
                                    <Heading size="md">Historcle</Heading>

                                    <Text py={2}>
                                        Developed an interactive web-based game inspired by Wordle, where players have six attempts to guess the year of a historical event based on an image and caption. Implemented daily challenges automatically updating every 24 hours, featuring new events. 
                                    
                                    </Text>
                                    <HStack py={2}>
                                        <a key="Github" href="https://github.com/kevinshah-dev/historcle-website">
                                            <Button color="blue.400">
                                                Github
                                            </Button>
                                        </a>
                                        <a key="Link" href="https://historcle-website.vercel.app/">
                                            <Button color="blue.400">
                                                Website Link
                                            </Button>
                                        </a>
                                    </HStack>
                                    <HStack pt={4} spacing={2}>
                                        <Badge 
                                            key="Javascript"
                                            colorScheme="blue"
                                        >
                                            Javascript
                                        </Badge>
                                        <Badge
                                            key="React"
                                            colorScheme="blue"
                                        >
                                            React
                                        </Badge>
                                        <Badge
                                            key="API"
                                            colorScheme="blue"                                        
                                        >
                                            TypeScript
                                        </Badge>
                                        <Badge
                                            key="MaterialUI"
                                            colorScheme="blue"                                        
                                        >
                                            TailwindCSS
                                        </Badge>
                                        <Badge
                                            key="MaterialUI"
                                            colorScheme="blue"                                        
                                        >
                                            Next.js
                                        </Badge>
                                    </HStack>
                                </CardBody>
                            </Stack>

                        </Card>
                    </Fade>
                    <Fade bottom>
                        <Card
                            key="Fantasy Football Point Predictor"
                            direction={{
                                base: "column"
                            }}
                            overflow="hidden"
                        >
                            <Image objectFit="cover" src="https://i.imgur.com/CWB4fr6.png" />
                            <Stack>
                                <CardBody align="left">
                                    <Heading size="md">NFL Fantasy Point Predictor Project</Heading>

                                    <Text py={2}>Along with my project team, I developed a machine learning model that predicts the fantasy point totals for the top 300 players in the 2021-2022 NFL Season. Check out our work by looking through InitialModel.ipynb in the Github repository.</Text>
                                    <HStack py={2}>
                                        <a key="Github" href="https://github.com/kevinshah-dev/Predicting-Fantasy-Football-Output">
                                            <Button color="blue.400">
                                                Github
                                            </Button>
                                        </a>
                                    </HStack>
                                    <HStack pt={4} spacing={2}>
                                        <Badge
                                            key="Python"
                                            colorScheme="blue"
                                        >
                                            Python
                                        </Badge>
                                        <Badge
                                            key="Machine Learning"
                                            colorScheme="blue"
                                        >
                                            Machine Learning
                                        </Badge>
                                    </HStack>
                                </CardBody>
                            </Stack>
                        </Card>
                    </Fade>

                </Stack>


            </Stack>
            <Text color="gray.600" fontSize="xl" px={4} py={5} align="center">
                Other Projects
            </Text>
            <Center px={4}>
                <ButtonGroup variant="outline" py={6}>
                    <Button
                        colorScheme={selected === "Data Science" ? "blue" : "gray"}
                        onClick={() => handleSelected("Data Science")}
                    >
                        Data Science
                    </Button>
                    <Button
                        colorScheme={selected === "Other" ? "blue" : "gray"}
                        onClick={() => handleSelected("Other")}
                    >
                        Other
                    </Button>
                </ButtonGroup>
            </Center>
            <SimpleGrid columns={[1,2,3]} px={4} spacing={4}>
                {selected === "Data Science" &&
                <>
                    <Fade bottom>
                        <Card key="Python Keras">
                            <Stack>
                                <CardBody align="left" h={[null, "40vh"]}>
                                    <Heading size="sm">Stock Price Prediction with Keras</Heading>
                                    <Text fontSize="sm" py={2}>
                                    Used the Keras interface for TensorFlow to create an LSTM neural network to predict prices for a portfolio of ten stocks. 
                                    </Text>
                                    <HStack spacing={2}>
                                        <Link
                                            key="Github"
                                            href="https://github.com/kevinshah-dev/Stock-Price-Prediction-with-Keras"
                                            color="blue.400"
                                        >
                                            Github
                                        </Link>
                                    </HStack>
                                </CardBody>
                            </Stack>
                        </Card>
                    </Fade>
                    <Fade bottom>
                        <Card key="Himalayan">
                            <Stack>
                                <CardBody align="left" h={[null, "40vh"]}>
                                    <Heading size="sm">Himalayan Climbing Expeditions</Heading>
                                    <Text fontSize="sm" py={2}>
                                    Analyzed a dataset of Himalayan climbs using R with group members. We aimed to find what factors (year, season, age, number of members, etc) in an expedition affected its success.
                                    </Text>
                                    <HStack>
                                        <Link
                                            key="Github"
                                            href="https://github.com/kevinshah-dev/Himalayan-Climbing/tree/main"
                                            color="blue.400"
                                        >
                                            Github
                                        </Link>
                                    </HStack>
                                </CardBody>
                            </Stack>
                        </Card>
                    </Fade>
                </>
                }
                {selected === "Other" &&
                    <Fade bottom>
                        <Card key="Verilog">
                            <Stack>
                                <CardBody align="left" h={[null, "40vh"]}>
                                    <Heading size="sm">32-Bit ALU and Multiplier/Divider</Heading>
                                    <Text fontSize="sm" py={2}>
                                    Created an ALU and Multiplier/Divider Unit using structural Verilog (gate-level design).
                                    </Text>
                                    <HStack spacing={2}>
                                        <Link
                                            key="Github"
                                            href="https://github.com/kevinshah-dev/32BitALUandMultDiv"
                                            color="blue.400"
                                        >
                                            Github
                                        </Link>
                                    </HStack>
                                </CardBody>
                            </Stack>
                        </Card>
                    </Fade>
                }

            </SimpleGrid>
        </Container>
        
        
    </>
    )

}