import {
    Divider,
    Stack,
    Text,
    Container,
    Box, 
    HStack,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Flex,
    Badge,
    Image,
    List,
    ListItem,
    ListIcon,
    Button,
    ButtonGroup,
    Center,
} from "@chakra-ui/react";

import  { ChevronRightIcon }  from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";


export default function Experience() {
    const tags = ["Experience #1", "Experience #2", "Experience #3"];
    const [selected, setSelected] = useState("");

    useEffect(() => {
        if (tags.length > 0) {
            setSelected(tags[0])
        }
    }, []);

    const handleSelected = (value) => {
        setSelected(value);
    };

    return (
        <>
            <Container maxW={"3xl"} id="experience">
                <Stack align="center" direction="row" px={4} py={4}>
                    <HStack mx={4}>
                        <Text color="blue.400" fontWeight={800}>
                            02
                        </Text>
                        <Text fontWeight={800}>Experience</Text>
                    </HStack>
                    <Divider orientation="horizontal"/>
                </Stack>
                <Center px={4}>
                    <ButtonGroup variant="outline">
                            <Button
                                colorScheme={selected === "Experience #1" ? "blue" : "gray"}
                                onClick={() => handleSelected("Experience #1")}
                            >
                                Experience #1
                            </Button>
                            <Button
                                colorScheme={selected === "Experience #2" ? "blue" : "gray"}
                                onClick={() => handleSelected("Experience #2")}
                            >
                                Experience #2
                            </Button>
                            <Button
                                colorScheme={selected === "Experience #3" ? "blue" : "gray"}
                                onClick={() => handleSelected("Experience #3")}
                            >
                                Experience #3
                            </Button>
                    </ButtonGroup>
                </Center>
                <Stack px={4} py={5} spacing={4}>
                    {selected === "Experience #1" && 
                        <Fade bottom>
                            <Card key="Prometheus Group" size="sm">
                                <CardHeader>
                                    <Flex justifyContent="space-between">
                                        <HStack>
                                            <Box px={2} align="left">
                                                <Text fontWeight={600}>Prometheus Group</Text>
                                                <i>Web Developer Intern</i>
                                            </Box>
                                        </HStack>
                                        <Text px={2} fontWeight={300}>
                                            August 2023 - December 2023
                                        </Text>
                                    </Flex>
                                </CardHeader>
                                <CardBody>
                                    <Flex>
                                        <List align="left" spacing={3}>
                                            <ListItem key="Point 1">
                                                <ListIcon
                                                    boxSize={6}
                                                    as={ChevronRightIcon}
                                                    color="blue.400"
                                                />
                                                Leveraged TypeScript and React to build the web-based Planning & Scheduling module of the Prometheus Platform, which is an Enterprise Asset Management tool used by over 50,000 people across our client base
                                            </ListItem>
                                            <ListItem key="Point 1">
                                                <ListIcon
                                                    boxSize={6}
                                                    as={ChevronRightIcon}
                                                    color="blue.400"
                                                />
                                                Implemented RTL (right-to-left) support for the Planning & Scheduling module, allowing languages like Arabic and Hebrew to be displayed, which assisted in Prometheus gaining several new clients in the EMEA region
                                            </ListItem>
                                        </List>
                                    </Flex>
                                </CardBody>
                                <CardFooter>
                                    <HStack spacing={2}>
                                        <Badge
                                            key="Javascript"
                                            colorScheme="blue"
                                        >
                                            Javascript
                                        </Badge>
                                        <Badge
                                            key="Typescript"
                                            colorScheme="blue"
                                        >
                                            Typescript
                                        </Badge>
                                        <Badge
                                            key="React"
                                            colorScheme="blue"
                                        >
                                            React
                                        </Badge>
                                    </HStack>
                                </CardFooter>
                            </Card>
                        </Fade>
                    }
                    {selected === "Experience #2" && 
                        <Fade bottom>
                            <Card key="Time's Arrow" size="sm">
                                <CardHeader>
                                    <Flex justifyContent="space-between">
                                        <HStack>
                                            <Box px={2} align="left">
                                                <Text fontWeight={600}>Time's Arrow</Text>
                                                <i>Software Engineer Intern</i>
                                            </Box>
                                        </HStack>
                                        <Text px={2} fontWeight={300}>
                                            March 2023 - August 2023
                                        </Text>
                                    </Flex>
                                </CardHeader>
                                <CardBody>
                                    <Flex>
                                        <List align="left" spacing={3}>
                                            <ListItem key="Point 1">
                                                <ListIcon
                                                    boxSize={6}
                                                    as={ChevronRightIcon}
                                                    color="blue.400"
                                                />
                                                Utilize my web development skills to construct the Time’s Arrow web application
                                            </ListItem>
                                            <ListItem key="Point 2">
                                                <ListIcon 
                                                    boxSize={6}
                                                    as={ChevronRightIcon}
                                                    color="blue.400"
                                                />
                                                Own and responsible for several features of the website, including the MaterialUI slider on the homepage and the website landscape
                                            </ListItem>
                                            <ListItem key="Point 3">
                                                <ListIcon 
                                                    boxSize={6}
                                                    as={ChevronRightIcon}
                                                    color="blue.400"
                                                />
                                                Work with management team to discuss upcoming feature implementations and write clear documentation
                                            </ListItem>
                                        </List>
                                    </Flex>
                                </CardBody>
                                <CardFooter>
                                    <HStack spacing={2}>
                                        <Badge
                                            key="Javascript"
                                            colorScheme="blue"
                                        >
                                            Javascript
                                        </Badge>
                                        <Badge
                                            key="Typescript"
                                            colorScheme="blue"
                                        >
                                            Typescript
                                        </Badge>
                                        <Badge
                                            key="React"
                                            colorScheme="blue"
                                        >
                                            React
                                        </Badge>
                                        <Badge
                                            key="WordPress"
                                            colorScheme="blue"
                                        >
                                            WordPress
                                        </Badge>
                                    </HStack>
                                </CardFooter>
                            </Card>
                        </Fade>
                    }
                    {selected === "Experience #3" && 
                        <Fade bottom>
                            <Card key="The Coding School" size="sm">
                                <CardHeader>
                                    <Flex justifyContent="space-between">
                                        <HStack>
                                            <Box px={2} align="left">
                                                <Text fontWeight={600}>The Coding School</Text>
                                                <i>Coding Instructor</i>
                                            </Box>
                                        </HStack>
                                        <Text px={2} fontWeight={300}>
                                            May 2022 - August 2022
                                        </Text>
                                    </Flex>
                                </CardHeader>
                                <CardBody>
                                    <Flex>
                                        <List align="left" spacing={3}>
                                            <ListItem key="Point 1">
                                                <ListIcon
                                                    boxSize={6}
                                                    as={ChevronRightIcon}
                                                    color="blue.400"
                                                />
                                                Instructed K-12 students on topics such as Python, Java, Data Science, and Web Development
                                            </ListItem>
                                            <ListItem key="Point 2">
                                                <ListIcon 
                                                    boxSize={6}
                                                    as={ChevronRightIcon}
                                                    color="blue.400"
                                                />
                                                Worked with CodeConnects executive team to develop personalized curriculums for students
                                            </ListItem>
                                            <ListItem key="Point 3">
                                                <ListIcon 
                                                    boxSize={6}
                                                    as={ChevronRightIcon}
                                                    color="blue.400"
                                                />
                                                Used my knowledge from undergraduate studies to help students decide on future educational goals
                                            </ListItem>
                                        </List>
                                    </Flex>
                                </CardBody>
                                <CardFooter>
                                    <HStack spacing={2}>
                                        <Badge
                                            key="Python"
                                            colorScheme="blue"
                                        >
                                            Python
                                        </Badge>
                                        <Badge
                                            key="Java"
                                            colorScheme="blue"
                                        >
                                            Java
                                        </Badge>
                                        <Badge
                                            key="HTML"
                                            colorScheme="blue"
                                        >
                                            HTML
                                        </Badge>
                                        <Badge
                                            key="CSS"
                                            colorScheme="blue"
                                        >
                                            CSS
                                        </Badge>
                                    </HStack>
                                </CardFooter>
                            </Card>
                        </Fade>
                    }
                </Stack>
            </Container>
        </>
    )

}